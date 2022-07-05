const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officenumber){
        super(name, id, email);
        this.officenumber = this.officenumber;

    }
    
    getRole() {
        return "Manager";
    }
    
    getGithub() {
        return this.officenumber;
    }
    
}