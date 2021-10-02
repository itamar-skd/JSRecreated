/**
* Array.prototype.concat()
* Concatenates an array and one or more values together.
* @param {any} valueN Unlimited values to be entered. Values may be arrays or regular variables.
* @return {Array} An array concatenating the called array along all of the mentioned values together.
*/

Array.prototype.concatRemade = function() {
    let concat = this
    Object.values(arguments).forEach(elem => {
        if (Array.isArray(elem)) concat = [...concat, ...elem]
        else concat = [...concat, elem]
    })

    return concat
}

/* Example */
const arr = [1, 2, 3]
const arr2 = [4, 5, 6]
const concatted = arr.concat(arr2, 'test')
console.log(concatted) // [1, 2, 3, 4, 5, 6, 'test']
