#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourful welcome message
console.log(chalk.bold.rgb(204,204,204)("\n \t\t <<< ========================================================================= >>> \n"));
console.log(chalk.bold.rgb(204,204,204)(chalk.magenta.bold("\t\t\t   Welcome To \ `Amashta Rehmani \ ` Object Oriented Program\n")));
console.log(chalk.bold.rgb(204,204,204)("\t\t <<<    ========================================================================= >>> "));

class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons = new Person()
const programStart =async(persons:Person)=>{
    do{
    console.log(chalk.blue.bold(`\n"Welcome!"`));
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices: ["Staff", "Student", "Exit"]
      })
      if(ans.select == "Staff"){
        console.log(chalk.blue.bold("\nYou appraoch tha staff room.Please feel free to ask any question."));
      }
      else if(ans.select == "Student"){
       const ans = await inquirer.prompt({
        name:"Student",
        type: "input",
        message: "Enter the student's name you wish to engage with:"
       })
       const student = persons.students.find(val => val.name == ans.Student)
       if(!student){
        const name = new Student(ans.Student)
        persons.addStudent(name)
        console.log(chalk.yellowBright.bold(`\nHello I am ${name.name}. Nice to meet you!`));
        console.log(chalk.yellowBright.bold(`\n"New student added."`));
        console.log("Current student list:");
        console.log(persons.students);
      }else {
        console.log(chalk.yellowBright.bold(`\nHello I am ${student.name}. Nice to see you again!`));
        console.log(chalk.yellowBright.bold(`\n"Existing student list:"`));
        console.log(persons.students);
    }
        
    }else if(ans.select == "Exit"){
        console.log(chalk.yellowBright.bold(`\n"Exiting the program..."`));
        process.exit()
    }   
    }while(true) 
}
programStart(persons)