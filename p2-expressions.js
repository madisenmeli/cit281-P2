/* Cit 281 Project 2
    Madisen Meli
*/
//i want to cry
const getRandomInteger = function(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    //returns single random letter
   
const getRandomLetter = function (min,max) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0,alphabet.length-1)];
}
    console.log(getRandomLetter());

const getRandomString = function (minLength, maxLength){
let result = "";
let length = getRandomInteger(minLength, maxLength);
for (let i = 0 ; i < length; i++){
    result += getRandomLetter();
}
return result
}
console.log(getRandomString(10,20));



const getSortedString = function (string){ 
return  Array.from(string).sort().join(""); 
}
console.log(getSortedString(getRandomString(10,20)));
