const assert =  require('chai').assert
const app =  require('../app.js')

describe('App', function () {
    it('hello', function () {
        assert.equal(app(), 'hello')
    })
})