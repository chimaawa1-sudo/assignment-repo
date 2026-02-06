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

// const firstname = "Degual";
// const lastname = "Awa";
// const age = 19;
// const country = "NIGERIA";
// const fullname = `${firstname} ${lastname}`.toUpperCase();
// const greetingMessage = `Hello, my name is ${fullname}. I am ${age} years old and I live in ${country}.`;
// console.log(greetingMessage);


//assignment operators
//write a program that calculates the area of a rectangle given its length and width using assignment operators.
// let length = 15;
// let width = 8;
// let area = length * width;
// console.log(area);

// //write a program that calculates the area of a circle given its radius using assignment and arithmetic operators.
// let radius = 8;
// const pi = 3.14;
// let areaOfCircle = pi * radius * radius;
// console.log(areaOfCircle);

// //write a program that converts temperature from Celsius to Fahrenheit using assignment and arithmetic operators.
// let celsius = 28;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log(fahrenheit);

//write a program that takes in a users age and outputs if the user is a child, teenager, adult.
const age = 27;
if (age < 13) {
    console.log("the user is a child");
} else if (age >= 13 && age < 20) {
    console.log("the user is a teenager");
} else {
    console.log("the user is an adult");
}

//loop through the numbers 1 to 50
for (let i = 1; i <= 50; i++) {
    console.log(i);
}