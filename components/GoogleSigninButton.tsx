'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import Image from 'next/image'

const GoogleSignInButton = () => {

  return (
    <button
      className='flex w-full gap-2'
      onClick={() => signIn('google')}
    >
      <Image src='/assets/google.png'
        width={20}
        height={20}
        alt='sign in'
      />
      <p>Continue with Google</p>
    </button>
  )
}

export default GoogleSignInButton
