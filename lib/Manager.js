const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officenumber){
        super(name, id, email);
        this.officenumber = officenumber;

    }

    getRole() {
        return "Manager";
    }
    
    getOfficeNumber() {
        return this.officenumber;
    }
    
    // Helper function to create a HTML card for Manager.
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
                        <a href='tel:${this.getOfficeNumber()}'>
                            Tel: ${this.getOfficeNumber()}
                        </a>
                    </li>
                </ul>
            </div>`;
    }
}

module.exports = Manager;