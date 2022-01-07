// f to c
// printArray([23, 140, 212, 41])
// [ -5, 60, 100, 5 ]

function getCelsius(array) {
    return array.map(ele => (ele - 32) * 5 / 9)
}