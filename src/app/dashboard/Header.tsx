import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Wallet from '@/wallet/Wallet';

export default function () {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    
    (true);
  }, []);

  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2>Get Your Certificates</h2>
      <div className='flex'>
        <Button className='mx-4'>Claim</Button>
        {isClient && <Wallet />}
      </div>
    </div>
  );
};