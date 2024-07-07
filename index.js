#! /usr/bin/env node
import inquirer from "inquirer";
const Currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    PKR: 280,
    CAD: 1.364409,
    JPY: 160.790296,
    BHD: 0.376000,
    INR: 83.471730,
    IRR: 42222.433273,
    NZD: 1.629364,
    QAR: 3.640000,
    RUB: 87.914549,
    SAR: 3.750000,
    LKR: 304.319864,
    TRY: 32.677538, //TurkishLira
};
let user_anser = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency ",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'JPY', 'BHD', 'IRR', 'NZD', 'QAR', 'RUB', 'SAR', 'LKR', 'TRY']
    },
    {
        name: "To",
        message: "Enter To Currency ",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR', 'CAD', 'JPY', 'BHD', 'IRR', 'NZD', 'QAR', 'RUB', 'SAR', 'LKR', 'TRY']
    },
    {
        name: "Amount",
        message: "Emter your Amount",
        type: "number"
    }
]);
let fromAmount = Currency[user_anser.from];
let toAmount = Currency[user_anser.To];
let amount = user_anser.Amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
