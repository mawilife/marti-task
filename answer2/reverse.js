/**
 * @param {Array<Number>} input 
 * @returns {Array<Number>}
 */
const reverse=function(input) {
    if(!Array.isArray(input))
        throw "Input must be array."

    let index=0;
    let reverseIndex=input.length-1;
    let temp;

    while (index<reverseIndex) {
        temp=input[index];
        input[index]=input[reverseIndex];
        input[reverseIndex]=temp;
        index++;
        reverseIndex--;
    }
    
    return input;
}
module.exports = reverse;