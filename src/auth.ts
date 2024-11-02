import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import prisma from "./lib/db"
import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'
import { signInSchema } from "./zod"
import { ZodError } from "zod"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    GitHub,
    Credentials({
      credentials: {
        email: {label: "email"},
        password: {label: "password", type: "password"}
      },
      authorize: async(credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials)
          
          const user = await prisma.user.findUnique({
            where: {
              email
            }
          })
  
          if (!user || !user.password) {
            return null
          }
  
          const isValid = await bcrypt.compare(password, user.password)
  
          if (!isValid) {
            return null
          }
  
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image
          }
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
          return null
        }

      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  }
})