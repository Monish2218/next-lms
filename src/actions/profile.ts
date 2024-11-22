'use server'

import { z } from 'zod'
import prisma from '@/lib/db'
import { auth } from '@/auth'

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
})

//TODO: Fix updateProfile

export async function updateProfile(data: z.infer<typeof profileSchema>) {
  const session = await auth()

  if (!session) {
    return { success: false, error: 'Not authenticated' }
  }

  const result = profileSchema.safeParse(data)

  if (!result.success) {
    return { success: false, error: result.error.errors[0].message }
  }

  const { name, email } = result.data

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.user?.id },
      data: { name, email },
    })

    return { success: true, user: updatedUser }
  } catch (error) {
    console.error('Profile update error:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}