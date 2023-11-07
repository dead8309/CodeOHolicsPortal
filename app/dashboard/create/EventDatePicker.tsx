"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react/"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type EventDatePickerProps = {
  selected: Date | undefined
  onSelected: (date: Date | undefined) => void
}

export default function EventDatePicker({selected, onSelected}: EventDatePickerProps) {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          {selected ? format(selected, "PPP") : <span>Date</span>}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(date) => onSelected(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
