"use client"

import GoogleSignInButton from '@/components/GoogleSigninButton';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

import '../globals.css'
import CustomInput from '@/components/CustomInput';

export default function Auth() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false);

  const signin = async () => {
    try {
      if(!user.email || !user.password){
        toast("Please enter  all fields!")
      }
      setLoading(true);
      const response = await axios.post("/api/auth/signin", user);

      if (response.data && response?.data.success) {
        const { message } = response.data
        toast(message)
        router.push("/home");
      } else if(response.data.message.includes('Invalid data!')){
        toast("Invalid data. Please enter correct data!")
      }else {
        const { message } = response.data
        router.push("/signup");
      }
    } catch (error: any) {
      console.log("Sign in failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='flex min-h-full items-center overflow-hidden px-10'>
      <Toaster />
      <div className='mx-auto flex w-full max-w-[600px] flex-col'>
        <h1 className='text-[35px] font-bold tracking-tight text-primary mb-6'>
          Sign in to My Wines
        </h1>
        <div className='rounded text-black'>
          <GoogleSignInButton />
          <div className='mx-auto my-8 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <div>
            <div className='flex flex-col w-full gap-6 mb-10'>
              <CustomInput
                type='email'
                name='Email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='Email address'
                autoComplete='email'
                required
              />
              <CustomInput
                type='password'
                name='Password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='password'
                required
              />
            </div>
            <button
              onClick={signin}
              className='mt-3 w-full'
            >
              Sign in with email
            </button>
            <p className='text-center my-5 text-[#636363]'>
              By clicking “Create your account with Google, you agree <br /> to My Wines <b>TOS</b> and <b>Privacy Policy</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
