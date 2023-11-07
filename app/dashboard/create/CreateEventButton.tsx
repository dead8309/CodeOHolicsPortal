"use client";
import { AnnoyedIcon, Image, Loader2, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EventDatePicker from "./EventDatePicker";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { set } from "mongoose";
import { useRouter } from "next/navigation";
import { getApiUrl } from "@/lib/utils";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import { tr } from "date-fns/locale";

export default function CreateEventButton() {
  const session = useSession();
  const router = useRouter();
  if (!session) {
    return null;
  }
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();
  const [image, setImage] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const { edgestore } = useEdgeStore();

  const onSubmit = async () => {
    setLoading(true);
    let imageUrl = '';
    if (image) {
      const res = await edgestore.publicFiles.upload({
        file: image,
        options: {
          temporary: true,
        }
      });
      imageUrl = res.url
    }

    let req = await fetch(`${getApiUrl()}/api/events/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: {
          title: name,
          discription: description,
          imageUrl: imageUrl,
          time: date || Date.now(),
        },
        _id: session.data?.user.id,
      }),
    });
    let msg = await req.json();
    console.log(msg);

    setLoading(false);
    router.refresh();
    setShow(false);
  };
  return (
    <div className="pt-4">
      <Dialog open={show} onOpenChange={(v) => setShow(v)}>
        <DialogTrigger asChild>
          <Button>
            Host an Event
            <Sparkles className="w-4 h-4 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create an Event</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start justify-between">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              value={description}
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <EventDatePicker selected={date} onSelected={setDate} />
          </div>
          <SingleImageDropzone
              width={400}
              height={200}
              value={image}
              onChange={(file) => {
                setImage(file);
              }}
            />
          <DialogFooter>
            <Button variant="ghost">Cancel</Button>
            <Button type="submit" onClick={onSubmit}>
              Save changes
              {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" /> }
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
