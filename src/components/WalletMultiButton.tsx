import dynamic from "next/dynamic"
import React from "react"

export const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
)

export default function WalletMultiButton() {
  return <WalletMultiButtonDynamic />
}