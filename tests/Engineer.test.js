const Engineer = require('../lib/Engineer');

// Tests for verifying the behavior of Engineer class.
describe('Engineer', () => {
    it('Should return an object on intialization',() => {
        let engineer = new Engineer('Tester', 1, 'tester@team.com');
        expect(typeof engineer).toBe('object');

    });

    it('should save and return Engineer details', () => {
        let engineer = new Engineer('Tester' , 1 , 'tester@team.com');
        expect(engineer.getName()).toBe('Tester');
        expect(engineer.getId()).toBe(1);
        expect(engineer.getEmail()).toBe('tester@team.com');
    });

    it('should return role as Engineer' , () => {
        let engineer = new Engineer('Tester' , 1 , 'tester@team.com');
        expect(engineer.getRole()).toBe('Engineer');
    });

    it('should save and return GitHub user details', () => {
        let engineer = new Engineer('Tester' , 1 , 'tester@team.com','tester@github.com');
        expect(engineer.getGithub()).toBe('tester@github.com');
    });
})