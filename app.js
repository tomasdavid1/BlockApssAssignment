
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


(async () =>{
    web3.eth.defaultAccount = await web3.eth.getAccounts().then( accounts => { return accounts[0]})
})()

console.log(web3.eth.defaultAccount)
console.log('hi')
let get_value = Contract.methods.testGet().call()
    .then(result => {return result})

    .catch((err) => console.log(err))


let set_value =  Contract.methods.testSet([12]).send({from: '0xbbc55117fcbaeaf28f88512f9e2cbb7611808600'})
    .then(reciept => {return 'everything ok '+ reciept})
    .catch(error => console.log(error))



module.exports = {
    get_value,
    set_value
}





