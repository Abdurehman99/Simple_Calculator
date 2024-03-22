#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBSTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);

if (answer.operator === "ADDITION"){
    console.log(answer.firstnumber + answer.second) ;
} else if (answer.operator === "SUBSTRACTION"){
    console.log(answer.firstnumber - answer.second) ;
} else if (answer.operator === "MULTIPLICATION"){
    console.log(answer.firstnumber * answer.second) ;
} else if (answer.operator === "DIVISION"){
    console.log(answer.firstnumber / answer.second) ;
} 
 else ("Please select correct operator")