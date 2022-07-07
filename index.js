const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const app = require('./src/app');

let team = [];

function promptEmployeeDetails(memberType) {
    infoType = '';
    if(memberType === 'Manager') {
        infoType = 'office number';
    } else if (memberType === 'Engineer') {
        infoType = 'GitHub username';
    } else {
        infoType = 'school name';
    }

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
        team.push(app.createNewEmployee(memberType, name, id, email, info));
        promptMoreEntries();
    });
}

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

promptEmployeeDetails('Manager');