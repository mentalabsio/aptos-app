/** @jsxImportSource theme-ui */
import { WalletManager } from "@/components/WalletManager"
import { Heading, Input } from "theme-ui"

export default function Home() {
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
        <WalletManager />
      </main>
    </>
  )
}
