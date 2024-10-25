'use server'

import prisma from '@/lib/db'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export async function registerUser(data: z.infer<typeof registerSchema>) {
  const result = registerSchema.safeParse(data)

  if (!result.success) {
    return { success: false, error: result.error.errors[0].message }
  }

  const { name, email, password } = result.data

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } })

    if (existingUser) {
      return { success: false, error: 'Email already in use' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return { success: true }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}