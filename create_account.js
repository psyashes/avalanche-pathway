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

  // Check if we already have an existing key
  if (!fs.existsSync(keyPath)) {
    console.log("Generating a new keypair...")
    const key = keyChain.makeKey()

    console.log("Saving keypair to", keyPath)
    fs.writeFileSync(keyPath, JSON.stringify({
      pubkey: key.getPublicKeyString(),
      privkey: key.getPrivateKeyString(),
    }, null, 2))
  }

  console.log("Loading credentials into keychain...")
  const data = JSON.parse(fs.readFileSync(keyPath))

  const key = keyChain.importKey(data.privkey)
  console.log("Imported X-chain address:", key.getAddressString())

  // 3. Check address balance
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})
