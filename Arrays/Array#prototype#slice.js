/**
* Array.prototype.slice()
* Extracts a section of a called array.
* @param {Number} start Beggining index from which to start extracting the array.
* @param {Number} end Ending index from which to end extracting the array. (Not Included)
* @return {Array} A new array of the extracted section of the called array.
*/

Array.prototype.sliceRecreated = function(start = 0, end = this.length) {
    let final = []
    for (let i = start; i < end; i++) {
        final = [...final, this[i]]
    }

    return final
}

/* Example */
const arr = ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog.']
console.log(arr.sliceRecreated()) // ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog.']
console.log(arr.sliceRecreated(2, 4)) // [ 'brown', 'fox' ]
console.log(arr.sliceRecreated(5)) // [ 'over', 'the', 'lazy', 'dog.' ]
