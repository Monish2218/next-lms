"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">LMS</Link>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
          <Button asChild variant="destructive" className='bg-indigo-600 hover:bg-indigo-700' >
            <Link href="/courses">
                Courses
            </Link>
          </Button>
          <Button className='text-indigo-600' variant="outline" onClick={async()=>{await signIn('google')}}>
            Sign In
          </Button>
        </div>
      </nav>
    </header>
  )
}