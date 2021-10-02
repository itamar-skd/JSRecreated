/**
* String.prototype.startsWith()
* Verify whether a string starts with one or more characters.
* @param {string} searchString The characters to be searched for at the start of the given position.
* @param {number} position If provided, it is used as the starting position of the search.
* @return {Boolean} Whether the string starts with the given characters.
*/

String.prototype.startsWithRecreated = function(searchString, position = 0) {
    if (position > this.length) throw new Error('The given position was larger than the calling string\'s length.')
    let sliced = ''
    for (let i = position; i < position + searchString.length; i++) {
        sliced += this[i]
    }

    return sliced === searchString
}

/* Example */
const str = 'The quick brown fox jumps over the lazy dog.' // length: 44 characters
console.log(str.startsWithRecreated('The')) // true
console.log(str.startsWithRecreated('quick')) // false
console.log(str.startsWithRecreated('quick', 4)) // true
