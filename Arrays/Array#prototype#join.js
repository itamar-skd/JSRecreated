/**
* Array.prototype.join()
* Description: Joins all array elements to a singular string.
* Parameters:
*   - seperator: A string value to separate the elements. If no seperator is provided, they would be split using a comma.
*/

Array.prototype.joinRemade = function(seperator = ',') {
    let final = this[0]
    for (let i = 1; i < this.length; i++) {
        final = `${final}${seperator}${this[i]}`
    }

    return final
}

/* Example */
const arr = ['This', 'Is', 'A', 'Test', 123, 456]
let joinedArray = arr.joinRemade(' ')
console.log(joinedArray) // This Is A Test 123 456
joinedArray = arr.joinRemade()
console.log(joinedArray) // This,Is,A,Test,123,456
