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
// const age = 27;
// if (age < 13) {
//     console.log("the user is a child");
// } else if (age >= 13 && age < 20) {
//     console.log("the user is a teenager");
// } else {
//     console.log("the user is an adult");
// }

// //loop through the numbers 1 to 50
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

//assignment arrays
//write a program that takes a list of numbers, strings, booleans and nested arrays and outputs the sum of all the numbers in the list using for loop and length method.

// using array method
//add the first items
//remove the last item
//add the last item
//remove the first item
//get the index of one array
//join them with comma
//add two arrays together

//write a program that collect data of foods with the following (type, class, quantity, description, name, and add 3 features to it, display how you destructure, rename, add value and use other operators)
const food = {
    type : "fruit",
    class : "citrus",
      quantity : 10,
      description : "a citrus fruit that is sour and juicy",
      name : "lemon",
   
}
food.color = "yellow";
food.taste = "sour";
food.isFresh = true;

//destructuring
const {type, class : category, quantity, description, name, color, taste, isFresh}=food

//renaming
const { quantity : amount, description : about, color : foodColor, isFresh : freshness}=food
   
//spread operator
const {... rest}= { type : "fruit", class : "citrus", quantity : 10, description : "a citrus fruit that is sour and juicy", name : "lemon", color : "yellow", taste : "sour", isFresh : true, }
console.log(rest)