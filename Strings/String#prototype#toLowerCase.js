/**
* String.prototype.toLowerCase()
* Modifies all uppercase characters in a called string to be lowercase.
* @return {string} The called string value in all-lowercase form.
*/

String.prototype.toLowerCaseRecreated = function() {
    let final = ''
    for (let i = 0; i < this.length; i++) {
        const charCode = this.charCodeAt(i)
        if (charCode < 91 && charCode > 64) final += String.fromCharCode(charCode + 32)
        else final += this[i]
    }

    return final
}

/* Example */
const str = 'The Quick Brown Fox Jumps Over The Lazy Dog.'
console.log(str.toLowerCaseRecreated()) // the quick brown fox jumps over the lazy dog.
