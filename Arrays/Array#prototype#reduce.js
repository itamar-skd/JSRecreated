/**
* Array.prototype.reduce()
* Description: Reduces all array values into a single value according to a given condition.
* Parameters:
*   - callback: The callback function used to return a new value based on a given series of operations. The callback function takes in 4 parameters - The previous value, The element currently being modified, its index, and the initial array.
*   - initialValue: A value to represent previousValue at the beginning of the operation.
*/

Array.prototype.reduceRecreated = function(callback, initialValue = this[0]) {
    let currentValue = initialValue
    const start = initialValue === this[0] ? 1 : 0
    for (let i = start; i < this.length; i++) {
        currentValue = callback(currentValue, this[i], i, this)
    }

    return currentValue
}

/* Example */
const arr = [1, 2, 3]
const sum = arr.reduceRecreated((a, b) => a + b)
console.log(sum) // 6
