
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const contractAddress = "0x15e28ccb487f7b344b09da51a58056e50ef849fe"
const lottery_contract_address ='0x61bc067e7a2c2f7260f9b3b70c0e3e27abb7a3ef'
const lottery_abi = [
    {
        "constant": false,
        "inputs": [],
        "name": "buy_ticket",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "max_tickets",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "curr_num_of_tickets",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "random_num",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "remaining_tickets",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "tickets",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "winner",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "winners",
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
const LotteryContract = new web3.eth.Contract(lottery_abi, lottery_contract_address);

(async () =>{
    web3.eth.defaultAccount = await web3.eth.getAccounts().then( accounts => { return accounts[0]})
})()



let buy_ticket = LotteryContract.methods.buy_ticket().send({from: '0xbbc55117fcbaeaf28f88512f9e2cbb7611808600'})
    .then(reciept => {return 'everything ok '+ reciept})
    .catch(error => console.log(error))

console.log(buy_ticket)

let get_remaining_tickets = LotteryContract.methods.get().call({from: '0xbbc55117fcbaeaf28f88512f9e2cbb7611808600'})
    .then(result => {return web3.utils.isBN(result)})

    .catch((err) => console.log(err))

let get_value = Contract.methods.testGet().call({from: '0xbbc55117fcbaeaf28f88512f9e2cbb7611808600'})
    .then(result => {return web3.utils.isBN(result)})

    .catch((err) => console.log(err))

let set_value =  Contract.methods.testSet([12]).send({from: '0xbbc55117fcbaeaf28f88512f9e2cbb7611808600'})
    .then(reciept => {return 'everything ok '+ reciept})
    .catch(error => console.log(error))


module.exports = {
    get_value,
    set_value,
    buy_ticket,
    get_remaining_tickets
}





