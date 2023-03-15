const Intern = require('../lib/Intern');

const freddy = new Intern('Freddy', 1, 'freddytodd@frogs.com', 'clowncollege');

describe('Intern Class', () => {
    it("Holds a 'name' parameter", () => {
        expect(freddy.name).toBe('Freddy');
    }); 

    it("Holds an 'id' parameter", () => {
        expect(freddy.id).toBe(1);
    }); 

    it("Holds an 'email' parameter", () => {
        expect(freddy.email).toBe('freddytodd@frogs.com');
    }); 

    it("Holds a 'school' parameter", () => {
        expect(freddy.getSchool()).toBe('clowncollege');
    });

    it("Returns the role of 'Intern'", () => {
        expect (freddy.getRole()).toBe('Intern');
    });
});