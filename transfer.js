// Load libraries and helpers
const fs = require("fs")
const client = require("./client")
const avalanche = require("avalanche")
const binTools = avalanche.BinTools.getInstance()

// Path where we keep the credentials for the pathway
const credentialsPath = "./credentials"

async function main() {
  // Initialize chain components
  const chain = client.XChain()
  const keychain = chain.keyChain()

  // Import X-chain key from the previously created file
  const data = JSON.parse(fs.readFileSync(`${credentialsPath}/keypair.json`))
  const key = keychain.importKey(data.privkey)

  // 2. Prepare transaction
  // 3. Send transaction to network
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})
