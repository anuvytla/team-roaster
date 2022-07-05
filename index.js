const fs = require('fs');
const inquirer = require('inquirer');

function promptEmployeeDetails(memberType) {
    infoType = '';
    if(memberType === 'Manager') {
        infoType = 'office number';
    } else if (memberType === 'Enginner') {
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
        console.log(name);
        // Create objects and add to team.
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
    console.log('created team page');
    // use fs to create a file and write html to it.
}

promptEmployeeDetails('Manager');