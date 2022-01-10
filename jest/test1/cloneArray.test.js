const { expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('clone an array', () => {
    const array = [1,2,3,4]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array) 
    // want it to be a copy of the array, don't want it to be the array
})