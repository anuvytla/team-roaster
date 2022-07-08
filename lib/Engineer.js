const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }
    
    getGithub() {
        return this.github;
    }

    // Helper function to create a HTML card for Engineer.
    getHTMLCard() {
        return `<div class="card col-2 m-3">
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
                        <a href='https://www.github.com/${this.getGithub()}' target='_blank'>
                            GitHub: ${this.getGithub()}
                        </a>
                    </li>
                </ul>
            </div>`;
    }
}

module.exports = Engineer;