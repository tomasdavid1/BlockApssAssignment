Hi! Welcome to the Blockchain Lottery!

The contract LotteryContract.sol needs to be deployed using Remix or other similar compilers and a blockchain client emulator.

The contract takes three parameters: the name of the contract, the symbol, and the maximum number of tickets that will be sold.


To run a client emulator execute anywhere on your directory from the terminal: npm install (if you have node and project manager installed, otherwise they will be required as well) ganache-cli
Then run the command ganache-cli.

Once the contract is deployed, in the file blockchain_api.js the ABI and the contract address must be replaced in their corresponding spots.

Then execute the command node app.js from the root of the directory of the project to launch the express server.

The Lottery allows to buy as many tickets as you want, and will select randomly an Ethereum account as a winner once all tickets are bought. The lottery will be reset after this.

Finally, enjoy your lottery!