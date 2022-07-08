const Employee = require("../lib/Employee");

// Tests for verifying the behavior of Employee class.
describe('Employee' , () => {
    it('Should return an object on initialization', () => {
        let employee = new Employee('Tester', 1, 'tester@team.com');
        expect(typeof employee).toBe('object');
    });

    it('Should save and return employee details', () => {
        let employee = new Employee('Tester', 1, 'tester@team.com');
        expect(employee.getName()).toBe('Tester');
        expect(employee.getId()).toBe(1);
        expect(employee.getEmail()).toBe('tester@team.com');
    });

    it('Should return role as employee', () => {
        let employee = new Employee('Tester', 1, 'tester@team.com');
        expect(employee.getRole()).toBe('Employee');
    });
})