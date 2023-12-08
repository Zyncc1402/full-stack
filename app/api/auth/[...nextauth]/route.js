import User from "@models/users";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({user, account}) {
      console.log("Signed in Succesfully")
      const {name, email, image} = user
      await connectToDB();
      const userExists = User.findOne({email})
      if (userExists) {
        User.create({
          email,
          name,
          image
        })
      }
      return true
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };