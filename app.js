const Web3 = require('web3')



const rpcURL = 'http://localhost:8545'
const web3 = new Web3(rpcURL)
const address = '0x01a3476bdb5e0372b0f0e2e5c427831c5b9b464b' // Your account address goes here


module.exports = function () {
    web3.eth.getBalance(address, (err, wei) => {
        balance = web3.utils.fromWei(wei, 'ether')
    })
}





