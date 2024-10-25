import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from "./lib/db"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  }
})