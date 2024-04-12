// You have been asked to create a program to calculate the parking fee for a parking lot. The parking fee is based on how long a car has been parked. Here are the rules for calculating the fee:

// - If a car is parked for up to 2 hours, the fee is ₹30 per hour.
// - If a car is parked for more than 2 hours but less than or equal to 5 hours, the fee is ₹25 (per hour) for the first 2 hours and ₹20 for each additional hour.
// - If a car is parked for more than 5 hours, the fee is ₹25 (per hour) for the first 2 hours, ₹20 (per hour) for the next 3 hours, and ₹15 for each additional hour beyond 5 hours.

// Write a JavaScript program that takes the number of hours a car has been parked as input and calculates the parking fee accordingly



const input = require("readline-sync");
let hours = input.questionInt("enter the number: ")
if (hours<=2){
    fee= hours*30
}
else if(hours<=5){
    fee=2*30+(hours-2)*20;
}
else{
    fee=2*30+3*20+(hours-5)*15;
}
console.log(fee);