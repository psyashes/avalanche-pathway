const fs = require("fs")

// Load and configure Avalanche client
const client = require("./client")

// Path where we will keep the credentials for the pathway
const credentialsPath = "./credentials"

async function main() {
  // Initialize the X-Chain client and keychain
  const chain = client.XChain()
  const keyChain = chain.keyChain()
  const keyPath = `${credentialsPath}/keypair.json`

  // 2. Generate private key
  // 3. Check address balance
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})
