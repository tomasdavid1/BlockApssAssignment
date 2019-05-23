const assert =  require('chai').assert
const expect =  require('chai').expect
const Web3 = require('web3')
const app =  require('../app.js')

describe('App', function () {

    it('retrieve get value', async () => { // no done
        const data = await app.get_value;
        expect(data._hex.to.equal('8'));
    })
    it('retrieve set value', async () => { // no done
        const data = await app.set_value;
        expect(data).to.equal('idk');
    })
})

