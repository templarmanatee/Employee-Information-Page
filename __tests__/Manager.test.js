const Manager = require('../lib/Manager');

const freddy = new Manager('Freddy', 1, 'freddytodd@frogs.com', 417);

describe('Manager Class', () => {
    it("Holds a 'name' parameter", () => {
        expect(freddy.name).toBe('Freddy');
    }); 

    it("Holds an 'id' parameter", () => {
        expect(freddy.id).toBe(1);
    }); 

    it("Holds an 'email' parameter", () => {
        expect(freddy.email).toBe('freddytodd@frogs.com');
    });

    it("Returns the role of 'Manager'", () => {
        expect (freddy.getRole()).toBe('Manager');
    });
});