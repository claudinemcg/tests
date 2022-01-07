const chai = window.chai
const expect = chai.expect


describe('getCelsius', () => {
    it('should convert fahrenheit to celsius for all values in an array', () => {
        expect(getCelsius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
        expect(getCelsius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
    })
})
