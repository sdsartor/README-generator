const util = require("util");
const inquirer = require("inquirer");
const fs = require('fs');
// Util is the folder that we want to use for the template. 
const generatingMarkdown = require('./util/generateMarkdown')

// These are the questions that will be displayed under the terminal.  The type allows for us to type what we want to with no issues.
const questions = [
{
    type: "input",
    name: 'Username',
    message: 'Enter github user name here:'
 },   
{
    type: "input",
    name: 'Title',
    message: 'Enter title of project here:'
 },   
{
type: 'input',
name: 'Description',
message: 'Enter your description of the project here:'
},
{
    type: 'input',
    name: 'Installation',
    message: 'Enter your installation process for your project here:',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Enter information on how to use your project here:',
},
{
    type: 'input',
    name: 'Credits',
    message: 'Enter your credits here:',
},
{
    type: 'list',
    name: 'License',
    choices: ['MIT License', 'Apache License', 'GPL License'],
    message: 'Select a license below:',
},
]
// This is what applies the data to a newly formed README page and allows for the code to be structured under the code. 
function writetoFile(README, data) {
// fs is necessary to set up the file to be created and README is the 
fs.writeFile(README, data, function(err) {
   console.log(README)
   console.log(data)
   if (err) {
    return console.log(err)
   } else {
console.log('Way to go, your README file is being generated!')
   }
})

}

// This section actually produces the readme file and names it a readme file thanks to the init function taking the prompts and data recorded and logging it onto the newly created page.
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writetoFile("README.md", generatingMarkdown(data));
        console.log(data)
    })
}

init();