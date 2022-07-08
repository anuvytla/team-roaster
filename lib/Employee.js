// Base class to encapsulate Employee information and helper methods.
class Employee {

    constructor(name, id , email) {
        this.name = name;
        this.id =id;
        this.email = email;
    }

    // Returns the name of the Employee.
    getName() {
        return this.name;
    }

    // Returns the ID of the Employee.
    getId() {
        return this.id;
    }

    // Returns the email address of the Employee.
    getEmail() {
        return this.email;
    }

    // Returns role as 'Employee'.
    getRole() {
        return "Employee";
    }

    // Helper function to create a HTML card for Employee.
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
                </ul>
            </div>`
    }
}

module.exports = Employee;