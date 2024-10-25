import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function SignInPage() {
  return (
    <div className='flex justify-center py-20 bg-green-100'>
      <SignIn/>
    </div>
  )
}

export default SignInPage
