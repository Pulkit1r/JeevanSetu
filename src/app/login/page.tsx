'use client'
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { EmailLogin,ScrollToTop,NumberLogin , BottomGradient } from '@/components/index'

export default function Signup() {
    const [type, setType] = useState<string>("email")
  const [mounted , setMounted] = useState(false)
  useEffect(()=>setMounted(true),[])
  if(!mounted) return null
 return( 
 <div className="shadow-input mx-auto my-10 w-full max-w-md rounded-none md:dark:shadow-gray-400 p-4 md:rounded-2xl md:p-8 ">
  <ScrollToTop />
      <h2 className="text-xl text-center font-bold text-neutral-800 dark:text-neutral-200">
        Login to your Jeevansetu account
      </h2>
      <p className="mt-2 max-w-sm text-sm text-center text-neutral-600 dark:text-neutral-300">
        Don&apos;t Have an Account ? <Link className="text-blue-500" href={'/signup'}>Create Account</Link>
      </p>
      {type === "email"?<EmailLogin />:<NumberLogin />}
    <button
          className="group/btn mt-4 relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-800 dark:to-zinc-800 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          onClick={()=>{setType((prev)=>prev==="email"?"number":"email")}}
        >Login with {type === "number"?"Email":"Phone Number"}
          <BottomGradient /></button>
                </div>
 )
}

