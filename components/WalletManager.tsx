/** @jsxImportSource theme-ui */
import { useWallet, Wallet } from "@manahippo/aptos-wallet-adapter"
import { useState } from "react"
import { Button, Flex, Heading } from "theme-ui"

export function WalletManager() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { wallets, connect, account, disconnect, wallet } = useWallet()

  return (
    <>
      {account?.address ? (
        <Button onClick={disconnect}>
          {
            <img
              sx={{
                height: "1.6rem",
                width: "1.6rem",
              }}
              src={wallet.adapter.icon}
            />
          }
        </Button>
      ) : (
        <Button onClick={() => setIsModalOpen(true)}>Select wallet</Button>
      )}

      {isModalOpen ? (
        <div
          sx={{
            position: "fixed",
            margin: "0 auto",
            backgroundColor: "background2",
            left: 0,
            right: 0,
            top: "16rem",
            zIndex: 999,
            maxWidth: "48rem",
            padding: "3.2rem",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            borderRadius: "0.8rem",
          }}
        >
          <Heading mb="3.2rem" variant="heading2">
            Connect a wallet on Aptos to continue
          </Heading>

          <Flex
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.6rem",
            }}
          >
            {wallets.map((wallet: Wallet) => {
              return (
                <Button
                  sx={{
                    alignItems: "center",
                    gap: "3.2rem",
                  }}
                  variant="resetted"
                  key={wallet.adapter.name}
                  onClick={async () => {
                    await connect(wallet.adapter.name)
                    setIsModalOpen(false)
                  }}
                >
                  <img
                    sx={{
                      height: "4.8rem",
                      width: "4.8rem",
                    }}
                    src={wallet.adapter.icon}
                  />
                  {wallet.adapter.name}
                </Button>
              )
            })}
          </Flex>
        </div>
      ) : null}

      {/** Modal background blur */}
      <div
        onClick={() => setIsModalOpen(false)}
        sx={{
          "::before": {
            content: "''",
            position: "fixed",
            backgroundColor: "background",
            visibility: isModalOpen ? "visible" : "hidden",
            opacity: isModalOpen ? 0.5 : 0,
            zIndex: 998,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
      ></div>
    </>
  )
}
