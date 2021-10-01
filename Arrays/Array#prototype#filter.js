/**
* Array.prototype.filter()
* Description: Returns a filtered array based on a given condition.
* Parameters:
*   - callback: The callback function used to return a filtered array based on a condition. The callback function takes in 3 parameters - The element currently being reviewed for the condition, its index, and the initial array.
*   - thisValue: The value passed in for the value of the this keyword in the callback function.
*/

Array.prototype.filterRecreated = function(callback) {
    let filtered = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) filtered.push(this[i])
    }

    return filtered
}
