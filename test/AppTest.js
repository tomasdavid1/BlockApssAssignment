const assert =  require('chai').assert
const expect =  require('chai').expect
const app =  require('../app.js')

describe('App', function () {
    it('set value on the contract', function () {
        assert.equal(app(), 8)
    })
})

