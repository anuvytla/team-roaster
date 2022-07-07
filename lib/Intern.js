const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

    // Helper function to create a HTML card for Intern.
    getHTMLCard() {
        return `<div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h4>${this.getName()}</h4>
                    <h5>${this.getRole()}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Employee ID: ${this.getId()}</li>
                    <li class="list-group-item">
                        <a href='mailto:${this.getEmail()}'>
                            ${this.getEmail()}
                        </a>
                    </li>
                    <li class="list-group-item">
                            School: ${this.getSchool()}
                    </li>
                </ul>
            </div>`;
    }
}

module.exports = Intern;