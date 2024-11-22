import { redirect } from 'next/navigation'
import ProfileForm from '@/components/profile/ProfileForm'
import { auth } from '@/auth'

export default async function ProfilePage() {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className='h-screen w-auto flex flex-col items-center justify-center gap-4'>
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <ProfileForm user={{email: session.user?.email as string, name: session.user?.name as string, isInstructor: false}} />
    </div>
  )
}