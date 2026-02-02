//write the following in a string or numbetrs...store them either with const or let
//1...your name...age, city height,weight,country,address,gender and console log them
// const name = "Awa chima";
// let age = 18;
// let city = "Lagos";
// let height = 175;
// let weight = 70;
// const country = "Nigeria";
// let address = "38 sanusi street";
// const gender = "Male";

// console.log( age, city, height, weight, country, address, gender);


// write a program that takes in a users firstname,lastname, age and country, and then outputs a greeting message using concatenation and string methods. The greeting message should include the users fullname in uppercase, age and country.

const firstname = "Degual";
const lastname = "Awa";
const age = 19;
const country = "NIGERIA";
const fullname = `${firstname} ${lastname}`.toUpperCase();
const greetingMessage = `Hello, my name is ${fullname}. I am ${age} years old and I live in ${country}.`;
console.log(greetingMessage);