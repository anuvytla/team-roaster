const Manager = require("../lib/Manager");

// Tests for verifying the behavior of Manager class.
describe('Manager' , () => {
    it('Should return an object on initialization', () => {
        let manager = new Manager('Tester', 1, 'tester@team.com');
        expect(typeof manager).toBe('object');
    });

    it('Should save and return manager details', () => {
        let manager = new Manager('Tester', 1, 'tester@team.com');
        expect(manager.getName()).toBe('Tester');
        expect(manager.getId()).toBe(1);
        expect(manager.getEmail()).toBe('tester@team.com');
    });

    it('Should return role as Manager', () => {
        let manager = new Manager('Tester', 1, 'tester@team.com');
        expect(manager.getRole()).toBe('Manager');
    });

    it('Should save and  return officeNumber', () => {
        let manager = new Manager('Tester', 1, 'tester@team.com', '1234567890');
        expect(manager.getOfficeNumber()).toBe('1234567890');
    });
})