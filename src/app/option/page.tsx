'use client';

import React from 'react';
import { Button } from '@nextui-org/react'
import Link from 'next/link';

export default function Option() {
  return (
    <div className="bg-customColor flex items-center justify-center h-screen">
      <div className="flex gap-2 max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <Link href="/dashboard">
          <Button>Aggregator</Button>
        </Link>
        <Link href="/dashboard">
          <Button>User</Button>
        </Link>
      </div>
    </div>
  )
}