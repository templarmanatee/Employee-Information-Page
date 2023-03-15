const Employee = require('../lib/Employee'); 

const freddy = new Employee('Freddy', 1, 'freddytodd@frogs.com', 'clowncollege');

describe('Employee Class', () => {
    it("Holds a 'name' parameter", () => {
        expect(freddy.name).toBe('Freddy');
    }); 

    it("Holds an 'id' parameter", () => {
        expect(freddy.id).toBe(1);
    }); 

    it("Holds an 'email' parameter", () => {
        expect(freddy.email).toBe('freddytodd@frogs.com');
    });

    it("Returns the role of 'Employee'", () => {
        expect (freddy.getRole()).toBe('Employee');
    });
});