/**
* Array.prototype.map()
* Description: Returns a modified array based on a given condition.
* Parameters:
*   - callback: The callback function used to return a new element based on a condition. The callback function takes in 3 parameters - The element currently being modified, its index, and the initial array.
*   - thisValue: The value passed in for the value of the this keyword in the callback function.
*/
Array.prototype.map = function(callback, thisValue) {
    let map = []
    for (let i = 0; i < this.length; i++) {
        map.push(callback.bind(thisValue)(this[i], i, this))
    }

    return map
}
