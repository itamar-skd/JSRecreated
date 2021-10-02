/**
* String.prototype.concat()
* Concatenates string arguments to the called string.
* @param {string} strN One or more strings to concatenate with the called string.
* @return {string} The string of the called string and the argument strings concatenated.
*/

String.prototype.concatRecreated = function() {
    let final = this
    for (let i = 0; i < Object.values(arguments).length; i++) {
        final += Object.values(arguments)[i]
    }

    return final
}

/* Example */
const str = 'The quick brown fox jumps over the lazy dog'
console.log(str.concatRecreated(' who', ' really', ' hates', ' cats.')) // The quick brown fox jumps over the lazy dog who really hates cats.
