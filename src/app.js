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
        teamCardsHTML += team_member.getHTMLCard();
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
                <h1 class="header col-12 text-center">Team Roaster</h1>
                <div class="row justify-content-center">
                    ${teamCardsHTML}
                </div>
            </body>
            </html>`;
}

exports.createNewEmployee = createNewEmployee;
exports.generateTeamHTML = generateTeamHTML;