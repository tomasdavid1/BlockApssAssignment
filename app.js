const Web3 = require('web3')


const rpcURL = '127.0.0.1:8545'
const address = '0x0aa8a99b2bcfd726c5b7b9cf69815fc5ecfcbe11' // Your account address goes here
const web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))


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

const Contract = web3.eth.contract(abi);

var Test = Contract.at(address)

x = Test.testGet.estimateGas()

/*contract.methods.totalSupply().call((err, result) => { console.log(result) })
contract.methods.name().call((err, result) => { console.log(result) })
contract.methods.symbol().call((err, result) => { console.log(result) })
const balance = contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => {  })
*/

module.exports = () => {
    return x

}





