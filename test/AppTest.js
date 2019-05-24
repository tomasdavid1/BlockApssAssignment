const assert =  require('chai').assert
const expect =  require('chai').expect
const Web3 = require('web3')
const app =  require('../app.js')

describe('App', function () {

    it('retrieve get value', async () => {
        const data = await app.get_value;
        console.log(data)
        expect(data._hex).to.equal('8');
    })
    it('retrieve set value', async () => {
        const data = await app.set_value;
        expect(data.toString()).to.equal('reciept');
    })

    it('get addresses',  () => {
        return app.get_addresses.then( data =>{
            expect(data).to.equal('addresses');
        })
    })

    it('retrieve set value', async () => {
        const data = await app.buy_ticket;
        expect(data.toString()).to.equal('idk');
    })
})

