const myAge = 23;
// I am seting my age to the variable myAge
let earlyYears = 2;
// we are setting earlyYears to 2 it will change thus we use let
earlyYears *= 10.5;
let laterYears = myAge -2;
// we are assgining laterYears to myAge - 2 we will be changing the value in the future thus we use let
laterYears *= 4;
// we are reassiging later year to be multipled by 4 
console.log(earlyYears);
console.log(laterYears);
const myAgeInDogYears = earlyYears + laterYears;
const myName = 'Goose'.toLowerCase();
// we are setting my name to goose and using the to lower case method to make the name lower case
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);