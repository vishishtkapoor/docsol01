import {
  WalletAdapterNetwork,
  WalletNotConnectedError,
} from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  // Add other wallet adapters here
} from '@solana/wallet-adapter-wallets';
import {
  clusterApiUrl,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';
import React, { useCallback, useMemo, useState } from 'react';
import { Button } from '@nextui-org/react';
import WalletMultiButton from '@/components/WalletMultiButton';

require('@solana/wallet-adapter-react-ui/styles.css');

const Wallet = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
};

export default Wallet;

const Context = ({ children }) => {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new LedgerWalletAdapter(),
      new PhantomWalletAdapter(),
      // Add other wallet adapters here
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content = () => {
  const [lamports, setLamports] = useState(0.1);
  const [wallet, setWallet] = useState("9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9");

  const connection = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    connection.getBalance(publicKey).then((bal) => {
      console.log(bal / LAMPORTS_PER_SOL);
    });

    const lamportsI = LAMPORTS_PER_SOL * lamports;

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(wallet),
        lamports: lamportsI,
      })
    );

    const signature = await sendTransaction(transaction, connection);

    await connection.confirmTransaction(signature, 'confirmed');
  }, [publicKey, sendTransaction, connection, lamports, wallet]);

  const setTheLamports = (e) => {
    console.log(Number(e.target.value));
    setLamports(Number(e.target.value));
  };

  const setTheWallet = (e) => {
    setWallet(e.target.value);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-inner">
          {/* <a id="title" className="brand" href="#">
              Brand
            </a> */}
          <ul className="nav"></ul>
          <ul className="nav pull-right">
            <li>
              {/* <a href="#">White Paper</a> */}
            </li>
            <li className="divider-vertical"></li>
            <Button><WalletMultiButton /></Button>
          </ul>
        </div>
      </div>
      {/* <input
          value={lamports}
          type="number"
          onChange={(e) => setTheLamports(e)}
        ></input>
        <br></br>
        <button className="btn" onClick={onClick}>
          Send Sol
        </button> */}
    </div>
  );
};
