const prompt = require('prompt-sync')({sigint:true});

// let op1;
// let op2;
// let operator;

// console.log("Enter the first operand: ");
let op1 = parseInt(prompt("Enter the first operand: "));
let op2 = parseInt(prompt("Enter the second operand: "));

let operator = prompt("Enter the operator of the operation you want to perform: ");


switch (operator) {
    case '+':
        console.log("The addition of the operands: ", op1 + op2);
        break;
    case '-':
        console.log("The subtraction of the operands: ", op1 - op2);

        break;
    case '*':
        console.log("The multiplication of the operands: ", op1 * op2);
        break;
    case '/':

        console.log("The division of the operands: ", op1 / op2);
        break;
    case '%':

        console.log("The mod of the operands: ", op1 % op2);
        break;

    default:
        console.log("Invalid operator");
        break;
}