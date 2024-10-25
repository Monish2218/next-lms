import { RegisterFormComponent } from '@/components/auth/register-form'
import React from 'react'

export default function page() {
  return (
    <div className='h-screen w-auto flex items-center justify-center'>
      <RegisterFormComponent />
    </div>
  )
}