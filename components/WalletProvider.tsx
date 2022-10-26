import * as React from "react"

import {
  WalletProvider as WalletProviderBase,
  AptosWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  RiseWalletAdapter,
  FletchWalletAdapter,
} from "@manahippo/aptos-wallet-adapter"

type Props = {
  children: React.ReactNode
}

function WalletProvider(props: Props) {
  const wallets = [
    new RiseWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    new PontemWalletAdapter(),
    new SpikaWalletAdapter(),
    new FletchWalletAdapter(),
  ]
  return (
    <WalletProviderBase
      wallets={wallets}
      autoConnect={false} /** allow auto wallet connection or not **/
      onError={(error) => {
        console.log("Handle Error Message", error)
      }}
    >
      {props.children}
    </WalletProviderBase>
  )
}

export default WalletProvider
