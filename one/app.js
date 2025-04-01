// import readline from "readline-sync";

// let age = readline.question("Enter your age ?");
// console.log(age);

// let name = readline.question("Enter your name");
// console.log(`Your name is ${name} and your age is ${age}`);

// let email = readline.question("Enter your email");
// console.log(email);

// let email = readline.questionEMail(`ENter your email`);
// console.log(email);

// let age = readline.questionInt(`Enter your age:`);
// console.log(age);

// import chalk from "chalk";
// // console.log (chalk.redBright("Hello, world!"));
// console.log (chalk.yellowBright.bgRed.bold("Hello, world!"));

// import figlet from "figlet";
// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import gradient from "gradient-string";

// console.log(gradient(['cyan' , 'pink'])('Hello world!'));

import { rainbow, pastel } from 'gradient-string';

// Use the pastel built-in gradient
console.log(pastel('I love gradient-string!'));

// Use the rainbow built-in gradient
console.log(rainbow('It is so pretty! 🌈'));

