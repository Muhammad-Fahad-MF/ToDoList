#! /usr/bin/env node

import inquirer from "inquirer"

//Heading
console.log("\t\tToDo List");

//condition for while loop
let condition = true;

//assigning array
let tasks = []

//while loop to run program continuously
while(condition){
const todo = await inquirer.prompt([

    //asking input/todos
    {
    message : "Enter The Tasks",
    name :"item",
    type:"input"
 },
 //asking for more todos or end program
 {
    message: "Do you want to add more ?",
    name:"askMore",
    type:"confirm",
    default:"false"

 }
])

//pushing inputs to array
tasks.push(todo.item)

//if condition to end the program
if(todo.askMore == false){
    condition = false;
}
}

//printing all the tasks/todos
console.log(tasks);

