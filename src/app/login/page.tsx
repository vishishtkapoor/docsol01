'use client';

import supabase from '@/src/auth/SupabaseClient'
import { Image, Button } from '@nextui-org/react';
import React from 'react';

export default function SignIn() {

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",

        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
          redirectTo: "http://localhost:3000/option",
        }

      })
    } catch (error) {
      console.log(error);
      alert("Wrong Email or Password!");
    }
  }

  return (
    <>
      <Image
        isZoomed
        width={240}
        alt="NextUI Fruit Image with Zoom"
        src="assets/imgg.jpg"
      />
      <div className="bg-customColor flex items-center justify-center h-screen">
        <div className='bg-[#180828]'>
          <Button onClick={handleSignIn} color="primary" variant="shadow" >SIGN UP WITH GOOGLE</Button>
        </div>
      </div>
    </>
  )
}