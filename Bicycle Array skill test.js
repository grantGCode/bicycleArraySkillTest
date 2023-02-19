/*
 * Remove the string 'bicycle' from the the containerArray
 * declare this string into a variable
 * for example let item = "string"
 * add this variable to the empty payload array
 * console.log the payloadArray with the sting inside of it
*/

let containerArray = ['truck', 'car', 'bicycle'];
let payloadArray = [];
let item; 

const B = containerArray.pop();

payloadArray.unshift(B);

console.log(containerArray, payloadArray);
