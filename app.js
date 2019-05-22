
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const contractAddress = "0x31a288400f234f9ef388dbd24c83d00d77baf57f"
const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "testSet",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "testGet",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

const Contract = new web3.eth.Contract(abi, contractAddress);

let default_account

web3.eth.getAccounts().then( accounts => { default_account = accounts[0]})

let x

Contract.methods.testGet().call({from: default_account}).then(result => {x = result})

console.log(x._hex.slice(2))

module.exports = x._hex.slice(2)





