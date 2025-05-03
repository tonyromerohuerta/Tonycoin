- name: Set up Node.js
         uses: actions/setup-node@v3
         with: Node.js                         
              node-version: 16

       # Step 3: Install dependencies
       - name: Install dependencies
         run: npm install

       # Step 4: Deploy the contract
       - name: Deploy Smart Contract
         env:
           PRIVATE_KEY: ee3cf94d01ed46b6b59a362483f4bd4b${{ secrets.PRIVATE_KEY }}
           INFURA_API_KEY: curl --url https://mainnet.infura.io/v3/ee3cf94d01ed46b6b59a362483f4bd4b \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'${{ secrets.INFURA_API_KEY }}
         run: |
           npx hardhat run scripts/deploy.js --network mainnet