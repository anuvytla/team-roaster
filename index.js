const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const app = require('./src/app');

let team = [];

// Helper function to prompt appropriate questions based on the type of the employee.
function promptEmployeeDetails(memberType) {
    // infoType describes the additional info needed for the given type of employee
    infoType = '';
    if(memberType === 'Manager') {
        infoType = 'office number';
    } else if (memberType === 'Engineer') {
        infoType = 'GitHub username';
    } else {
        infoType = 'school name';
    }

    // Create prompts using inquirer.
    inquirer.prompt([{
        message: `Enter name of the ${memberType}`,
        name: "name"
    },
    {
        message: `Enter ${memberType} ID`,
        name: "id" 
    },
    {
        message: `Enter ${memberType} email address`,
        name: "email"

    },
    {
        message: `Enter  ${memberType} ${infoType}`,
        name: "info"
    }
    ]).then(function({name, id, email, info}){
        // Once all the questions for the employee have been answered, create an instance of approriate class and add it to the team array.
        team.push(app.createNewEmployee(memberType, name, id, email, info));
        // Prompt for another Employee after saving the previous one.
        promptMoreEntries();
    });
}

// Helper function to provide an option to add an Engineer, Intern or end.
function promptMoreEntries(){
    inquirer.prompt([{
        message: "Do you want to add more members to the team?",
        name: "member_type",
        type: "list",
        choices: ['Engineer', 'Intern', 'None']
    }]).then(function({member_type}){
        if(member_type === 'None') {
            createTeamPage();
        } else {
            promptEmployeeDetails(member_type);
        }
    });
}

// Generates the HTML text and saves it to a file.
function createTeamPage(){
    // Generate the HTML text for the team. 
    let htmlText = app.generateTeamHTML(team);
    // Create a README.md file and write the markdown text to it.
    fs.writeFile(path.join(__dirname, 'dist', 'index.html'), htmlText, err => {
      if (err) {
          // Display if there is an error.
          console.log(err);
          return;
      }
      // Display success message to the user.
      console.log('Success. Your team page is ready.');
    });
}

// On app start, prompt the details of the team Manager.
promptEmployeeDetails('Manager');