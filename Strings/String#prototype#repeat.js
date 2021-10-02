/**
* String.prototype.repeat()
* Repeats the called string.
* @param {Number} count Number of times to repeat the string.
* @return {string} The called string repeated count times.
*/

String.prototype.repeatRecreated = function(count) {
    let final = this
    for (let i = 1; i < count; i++) {
        final += this
    }

    return final
}

/* Example */
const str = `You are 90% gay\n${'O'.repeatRecreated(8)}${'-'.repeatRecreated(2)}`
console.log(str)
/**
 * You are 90% gay
 * OOOOOOOO-- 
 */
