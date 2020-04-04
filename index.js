// TODO: import fs, path and inquirer modules
const fs = require("fs");
// const util = require("util");
const inquirer = require("inquirer");

// TODO: import api and generateMarkdown modules from ./utils/
const api = require("./utils/api.js")
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Add inquirer question objects to questions array. This should

// const writeFile = util.promisify(fs.writeFile);
function prompUser() {
    return inquirer.prompt(questions);
  } 
  


  
// include all the necessary questions for the user.

const questions = [{
  type: "input",
  name: "username",
  message: "What is your GitHub username?"
},
{
  type:"input",
  name: "email",
  message: "What is your email?"
    
},
{
  type:"input",
  name:"title",
  message: "What is the title of your project?"
},
{
  type:"input",
  name:"description",
  message: "Please write a description of your project"
},
{
  type: "input",
  name: "installation",
  message:"What command should be ran to install dependencies?"
},
{
  type: "input",
  name:"usage",
  message:"How would a user go about using your repo?"

},
{
  type:"list",
  name :"license",
  message:"What license does your project have?",
  choices:["MIT","Mozilla","IBM", "Apache"] 
  
},
{
  type:"input",
  name:"contributor",
  message:"How would a user go about contributing?"
},
{
  type:"input",
  name:"test",
  message:"How would a user test your code?"
}];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(error) {

    // if an error occurs, log it
    if (error) {
      // stop execution if there is
      console.log(error)
      return console.log(error);
    }
  
    // finished writing to file
    console.log("Success!");
  
  });
}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {
  prompUser()
  .then(answers => {
     api.getUser(answers.username)
   .then (response => {
    
     const markdown = generateMarkdown(response.data,answers)
      console.log(response.data)
     return writeToFile("readme.md",markdown)
  })
  }).catch(error => {
    console.log("Something went wrong")
  })
  
  
}

init();
