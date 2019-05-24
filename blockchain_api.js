
"use strict";

const Web3 = require('web3'),

    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")),

    lottery_contract_address ='0x7c335c4d24b7d3e1e1491dac3429905a8bbe1ed9',
    lottery_abi = [
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
            "constant": false,
            "inputs": [],
            "name": "choose_winner",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
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
                    "name": "_max_tickets",
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
            "name": "get_addresses",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "get_remaining_tickets",
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
            "name": "get_winner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
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
            "name": "max_tickets",
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
            "name": "prize",
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
            "inputs": [],
            "name": "winner",
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
            "name": "winning_amount",
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
    ],
    LotteryContract = new web3.eth.Contract(lottery_abi, lottery_contract_address);

(async () =>{
     await web3.eth.getAccounts().then( accounts => { web3.eth.defaultAccount = accounts[0]})
})()


module.exports = {
    web3,
    LotteryContract,

}


/*
let buy_ticket = LotteryContract.methods.buy_ticket().send({from: '0x16c12270f76c4d61f115d0cda272601448a5eecc'})
    .then(reciept => {return 'everything ok '+ reciept})
    .catch(error => console.log(error))


let get_remaining_tickets = LotteryContract.methods.get_remaining_tickets().call({from: '0x16c12270f76c4d61f115d0cda272601448a5eecc'})
    .then(result => {return web3.utils.isBN(result)})

    .catch((err) => console.log(err))

console.log(get_remaining_tickets)

let get_addresses = LotteryContract.methods.get_addresses().call({from: '0x16c12270f76c4d61f115d0cda272601448a5eecc'})
    .then(result => {return web3.utils.isBN(result)})

    .catch((err) => console.log(err))
console.log(get_addresses)

let get_value = Contract.methods.testGet().call({from: '0x16c12270f76c4d61f115d0cda272601448a5eecc'})
    .then(result => {return web3.utils.isBN(result)})

    .catch((err) => console.log(err))

let set_value =  Contract.methods.testSet([12]).send({from: '0x16c12270f76c4d61f115d0cda272601448a5eecc'})
    .then(reciept => {return 'everything ok '+ reciept})
    .catch(error => console.log(error))


*/




