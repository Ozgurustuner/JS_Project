const assert = require('assert')
const { forEach, map } = require('./index.js')





const test = (description, func) => {
    console.log("--------------", description);

    try {
        func()
    } catch (error) {
        console.log(error.message);
    }

}

test("ForEach Test", () => {
    let sum = 0;
    forEach([1, 2, 3], function (value) {
        sum += value
    })
    // if (sum !== 7) {
    //     throw new Error('Çıkan toplam sonucu hatalıdır')
    // }
    assert.strictEqual(sum,6,"Toplam sonuc hatalıdır")
}) 

test('Map Test', () => { 
    
const result = map([1, 2, 3], value => {
    return value * 2
})
// assert.strictEqual(result[0],2);
// assert.strictEqual(result[1],5);
// assert.strictEqual(result[2],6);

assert.deepStrictEqual(result,[2,4,6])
// if (result[0] !== 2) {
//     throw new Error(`2 çıkması lazımdı çıkan sonuc ${result[0]}`)
// }
// if (result[1] !== 4) {
//     throw new Error(`4 çıkması lazımdı çıkan sonuc ${result[1]}`)
// }
// if (result[2] !== 6) {
//     throw new Error(`6 çıkması lazımdı çıkan sonuc ${result[2]}`)
// }
 })