/**
* String.prototype.split()
* Divide a string into an array.
* @param {string} seperator The string used to divide the array.
* @param {number} limit The number of elements to be in the returned array.
* @return {Array} The string divided into an array by the seperator.
*/

String.prototype.splitRecreated = function(seperator, limit) {
    if (seperator === '') return [...this]
    let final = []
    let current = ''
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i) !== seperator) current += this[i]
        else {
            if (final.length !== limit) {
                final = [...final, current]
                current = ''
            }
        }
    }

    if (!limit) final.push(current)

    return final
}

/* Example */
const str = 'The quick brown fox jumps over the lazy dog.'
let split = str.splitRecreated()
console.log(split)

split = str.splitRecreated(' ')
console.log(split) // [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.' ]

split = str.splitRecreated(' ', 3)
console.log(split) // [ 'The', 'quick', 'brown' ]
