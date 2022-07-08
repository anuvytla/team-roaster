const Intern = require("../lib/Intern");

// Tests for verifying the behavior of Intern class.
describe('Intern' , () => {
    it('Should return an object on initialization', () => {
        let intern = new Intern('Tester', 1, 'tester@team.com');
        expect(typeof intern).toBe('object');
    });

    it('Should save and return intern details', () => {
        let intern = new Intern('Tester', 1, 'tester@team.com');
        expect(intern.getName()).toBe('Tester');
        expect(intern.getId()).toBe(1);
        expect(intern.getEmail()).toBe('tester@team.com');
    });

    it('Should return role as Intern', () => {
        let intern = new Intern('Tester', 1, 'tester@team.com');
        expect(intern.getRole()).toBe('Intern');
    });

    it('Should save and  return school of Intern', () => {
        let intern = new Intern('Tester', 1, 'tester@team.com', 'Berkeley');
        expect(intern.getSchool()).toBe('Berkeley');
    });
})