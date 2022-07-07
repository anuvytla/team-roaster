const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function createNewEmployee(employee_type, name, id, email, info){
    switch (employee_type) {
        case 'Manager':
            return new Manager(name, id, email, info);
        case 'Engineer':
            return new Engineer(name, id, email, info);
        case 'Intern':
            return new Intern(name, id, email, info);
        default:
            return new Employee(name, id, email);
    }
}

function generateTeamHTML(team) {
    teamCardsHTML = '';
    for (const team_member of team) {
        teamCardsHTML += generateMemberCard(team_member);
    }

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
                <title>Team Roaster</title>
            </head>
            <body>
                <h1 id="header">Team Roaster</h1>
                ${teamCardsHTML}
            </body>
            </html>`;
}

function generateMemberCard(team_member) {

    let info = '';

    switch(team_member.getRole()) {
        case 'Manager':
            info = team_member.getOfficeNumber();
            break;
        case 'Engineer':
            info = team_member.getGithub();
            break;
        case 'Intern':
            info = team_member.getSchool();
            break;
        default:
            break;
    }

    return `<div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h4>${team_member.getName()}</h4>
                    <h5>${team_member.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee #: ${team_member.getId()}</li>
                    <li class="list-group-item">${team_member.getEmail()}</li>
                    <li class="list-group-item">${info}</li>
                </ul>
            </div>`;
}

exports.createNewEmployee = createNewEmployee;
exports.generateTeamHTML = generateTeamHTML;