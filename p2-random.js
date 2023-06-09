/* Cit 281 Project 2
    Madisen Meli
*/

function getRandomInteger(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    //returns single random letter
   
    function getRandomLetter(min,max) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length-1)];
}
    console.log(getRandomLetter());

function getRandomString(minLength, maxLength){
let result = "";
let length = getRandomInteger(minLength, maxLength);
for (let i = 0 ; i < length; i++){
    result += getRandomLetter();
}
return result
}
console.log(getRandomString(10,20));

//return the code in ascending order 

function getSortedString(string){ 
return  Array.from(string).sort().join(""); 
}
console.log(getSortedString(getRandomString(10,20)));
