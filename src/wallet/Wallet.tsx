'use client';

import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base';

export default function ConnectButton() {
  const { wallet, disconnect, select } = useWallet();
  const [render, reRender] = useState(false);

  useEffect(() => {
    select('Glow' as WalletName<'Glow'>)
  }, [])

  const handleDisConnect = () => {
    console.log("disconnecting")
    disconnect()
      .then(() => console.log("disconnected"))
      .catch((e) => console.error(e))
      .finally(() => reRender(!render))
  };

  return (
    <>
      {
        !wallet ? <button
          onClick={handleDisConnect}
          className="bg-blue-500 hover:bg-blue-700 text-black
        ++++++++++++++++++++++++++++ font-bold py-2 px-4 rounded">
          Disconnect Wallet
        </button>
          : <></>
      }
    </>
  );
};
