#! /usr/bin/env node
import inquirer from "inquirer";
console.log("ToDo List");
let condition = true;
let tasks = [];
while (condition) {
    const todo = await inquirer.prompt([
        {
            message: "Enter The Tasks",
            name: "item",
            type: "input"
        },
        {
            message: "Do you want to add more ?",
            name: "askMore",
            type: "confirm",
            default: "false"
        }
    ]);
    tasks.push(todo.item);
    if (todo.askMore == false) {
        condition = false;
        console.log(tasks);
    }
}
