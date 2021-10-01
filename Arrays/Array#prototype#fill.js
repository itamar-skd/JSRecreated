/**
* Array.prototype.fill()
* Description: Fills array elements through a given range of indexes.
* Parameters:
*   - value: The value to fill the elements with.
*   - start: The starting index to fill the array with elements from. (Default: 0)
*   - end: The final index to fill the array with elements with. (Not included - Default: this.length)
*/

Array.prototype.fillRemade = function(value, start = 0, end = this.length) {
    return this.map((elem, i) => i >= start && i < end ? value : elem)
}

/* Example */
const arr = [1, 2, 3, 8, 10]

let filledArr = arr.fillRemade(0, 1, 3)
console.log(filledArr) // [ 1, 0, 0, 0, 10 ]

filledArr = arr.fillRemade(0, 1)
console.log(filledArr) // [ 1, 0, 0, 0, 0 ]

filledArr = arr.fillRemade(0, 0, 3)
console.log(filledArr) // [ 0, 0, 0, 8, 10 ]

filledArr = arr.fillRemade(0)
console.log(filledArr) // [ 0, 0, 0, 0, 0 ]
