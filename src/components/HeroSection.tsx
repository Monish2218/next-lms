"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { signIn } from 'next-auth/react'

export function HeroSection() {
  return (
    <div className="text-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block dark:text-white">Welcome to Our</span>
        <span className="block text-indigo-600">Learning Management System</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Empower your learning journey with our cutting-edge platform. Access a wide range of courses and enhance your skills from anywhere, anytime.
      </p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <Link href="/courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Explore Courses
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link href="" onClick={async()=>{await signIn("google")}} className="w-full dark:text-white dark:bg-slate-800 dark:hover:bg-slate-900 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}