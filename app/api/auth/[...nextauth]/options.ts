
import { connectDB } from "@/lib/db";
import { User } from "@/lib/user";
import { connect } from "http2";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectDB();

        const userExist = await User.find({ email: profile?.email })
        
        if (!userExist) {
          const user = await User.create({
            email: profile?.email,
            name: profile?.name,
            image: profile?.image,
          });
        }

        return true
      } catch (error) {
        console.log(error);
        return false
      }
    }
  }
};
