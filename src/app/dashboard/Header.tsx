'use client';

import React, { useEffect, useState } from 'react';
import Wallet from '@/wallet/Wallet';

export default function () {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <Wallet />
    </div>
  );
};