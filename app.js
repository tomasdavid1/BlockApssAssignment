
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

let get_value = Contract.methods.testGet().call()
    .then(result => {return result})

    .catch((err) => console.log(err))


let set_value =  Contract.methods.testSet([8]).send()
    .then(reciept => {return 'everything ok '+ reciept})

module.exports = {
    get_value,
    set_value
}





