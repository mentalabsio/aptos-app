import React from "react"
import Head from "next/head"
import { ThemeProvider } from "theme-ui"
import Router, { AppProps } from "next/dist/shared/lib/router/router"

// @ts-ignore
import withGA from "next-ga"

import defaultTheme from "../styles/theme"
import dynamic from "next/dynamic"

const WalletProvider = dynamic(() => import("components/WalletProvider"), {
  ssr: false,
})

function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        {/** Load font styles directly on the document to prevent flashes */}
        <title>Aptos App</title>
        <link href="/fonts/fonts.css" rel="stylesheet" />
        <link href="/base.css" rel="stylesheet" />
      </Head>

      <WalletProvider>
        <Component {...pageProps} />
      </WalletProvider>
    </ThemeProvider>
  )
}

export default withGA(process.env.NEXT_PUBLIC_GA_ID, Router)(App)
