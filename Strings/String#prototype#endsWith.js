/**
* String.prototype.endsWith()
* Verify whether a string ends with one or more characters.
* @param {string} searchString The characters to be searched for at the end of the string.
* @param {number} length If provided, it is used as the length of str.
* @return {Boolean} Whether the string ends with the given characters.
*/

String.prototype.endsWithRecreated = function(searchString, length = this.length) {
    if (length > this.length) throw new Error('The given length was larger than the calling string\'s length.')
    let sliced = ''
    for (let i = length - searchString.length; i < length; i++) {
        sliced += this[i]
    }

    return sliced === searchString
}

/* Example */
const str = 'The quick brown fox jumps over the lazy dog.' // length: 44 characters
console.log(str.endsWithRecreated('dog.')) // true
console.log(str.endsWithRecreated('dog')) // false
console.log(str.endsWithRecreated('dog', 43)) // true
