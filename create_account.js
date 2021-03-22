const fs = require("fs")

// Load and configure Avalanche client
const client = require("./client")

// Path where we will keep the credentials for the pathway
const credentialsPath = "./credentials"

async function main() {
  // 1. Configure keychain
  // 2. Generate private key
  // 3. Check address balance
}

main().catch((err) => {
  console.log("We have encountered an error!")
  console.error(err)
})
