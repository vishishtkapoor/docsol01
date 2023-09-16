'use client';

import Header from "./Header";
import Sidebar from "./Sidebar";
import React from "react";

export default function Dashboard({ children }: { children: React.ReactNode[] }) {
  return (
    <div className='flex flex-col md:flex-row md:h-[100vh] h-auto w-full bg-customColor  '>
      <Sidebar children={undefined} />
      <div className='flex-1  px-4 pb-4 md:p-4'>
        <div className='bg-[#D4D4D8] rounded-xl flex flex-col gap-2 w-full p-4 h-full md:rounded-[20px]'>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}