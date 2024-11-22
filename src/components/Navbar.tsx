"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from "lucide-react"
import { useTheme } from 'next-themes';

export function Navbar() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
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
          <Button asChild className='text-indigo-600 dark:text-white' variant="outline">
            <Link href="/login">
              Sign In
            </Link>
          </Button>
          <button
            onClick={toggleTheme}
            className="text-gray-900 dark:text-white focus:outline-none"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            )}
          </button>

        </div>
        {/* TODO: Modify Navbar for small screen */}
      </nav>
    </header>
  )
}