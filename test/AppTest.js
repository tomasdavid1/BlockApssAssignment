const assert =  require('chai').assert
const app =  require('../app.js')

describe('App', function () {
    it('gas estimates', function () {
        assert.equal(app(), 21272)
    })
})