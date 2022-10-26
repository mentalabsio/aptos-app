import React from "react"
import Head from "next/head"
import { ThemeProvider } from "theme-ui"
import Router, { AppProps } from "next/dist/shared/lib/router/router"

import {
  WalletProvider,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  RiseWalletAdapter,
  FletchWalletAdapter,
} from "@manahippo/aptos-wallet-adapter"

// @ts-ignore
import withGA from "next-ga"

import defaultTheme from "../styles/theme"

function App(props: AppProps) {
  const { Component, pageProps } = props

  const wallets = [
    new RiseWalletAdapter(),
    // new HippoWalletAdapter(),
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    // new HippoExtensionWalletAdapter(),
    new PontemWalletAdapter(),
    new SpikaWalletAdapter(),
    new FletchWalletAdapter(),
  ]

  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        {/** Load font styles directly on the document to prevent flashes */}
        <title>Aptos App</title>
        <link href="/fonts/fonts.css" rel="stylesheet" />
      </Head>

      <WalletProvider
        wallets={wallets}
        autoConnect={false} /** allow auto wallet connection or not **/
        onError={(error) => {
          console.log("Handle Error Message", error)
        }}
      >
        <Component {...pageProps} />
      </WalletProvider>
    </ThemeProvider>
  )
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(App)
