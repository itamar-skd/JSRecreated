/**
* Array.prototype.concat()
* Description: Merges two or more arrays together.
* Parameters:
*   - Unlimited values to be entered. Values may be arrays or regular variables.
*/

Array.prototype.concatRecreated = function() {
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
const concatted = arr.concatRecreated(arr2, 'test')
console.log(concatted) // [1, 2, 3, 4, 5, 6, 'test']
