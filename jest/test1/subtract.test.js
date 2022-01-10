const { expect } = require('@jest/globals');
const subtract = require('./subtract');

test('subtract a number from another number', () => {
    expect(
        subtract(7,5)
    ).toBe(2)
})