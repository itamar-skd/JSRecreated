/**
* String.prototype.slice()
* Extracts a section of a called string.
* @param {Number} start Beggining index from which to start extracting the string.
* @param {Number} end Ending index from which to end extracting the string. (Not Included)
* @return {string} A new string of the extracted section of the called string.
*/

String.prototype.sliceRecreated = function(start = 0, end = this.length) {
    let final = ''
    for (let i = start; i < end; i++) {
        final += this[i]
    }

    return final
}

/* Example */
const str = 'The quick brown fox jumps over the lazy dog.'
console.log(str.sliceRecreated()) // The quick brown fox jumps over the lazy dog.
console.log(str.sliceRecreated(4)) // quick brown fox jumps over the lazy dog.
console.log(str.sliceRecreated(4, 9)) // quick
