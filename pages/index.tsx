/** @jsxImportSource theme-ui */
import { useWallet } from "@manahippo/aptos-wallet-adapter"
import Head from "next/head"
import { Button, Heading, Input } from "theme-ui"

export default function Home() {
  const {
    autoConnect,
    connect,
    disconnect,
    account,
    wallets,
    signAndSubmitTransaction,
    connecting,
    connected,
    disconnecting,
    wallet,
    signMessage,
    signTransaction,
  } = useWallet()

  const currentWallet = wallet ? wallet : wallets[1]
  return (
    <>
      <main
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "64rem",
          margin: "0 auto",
          marginTop: "4rem",
        }}
      >
        <Heading mb=".8rem" variant="heading1">
          Themed Aptos App
        </Heading>
        <Button
          onClick={() => {
            connect(currentWallet.adapter.name)
          }}
          id={currentWallet.adapter.name.split(" ").join("_")}
          key={currentWallet.adapter.name}
          className="connect-btn"
        >
          {currentWallet.adapter.name}
        </Button>
        <form>
          <Input name="" />
        </form>
      </main>
    </>
  )
}
