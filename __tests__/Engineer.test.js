const Engineer = require('../lib/Engineer');

const freddy = new Engineer('Freddy', 1, 'freddytodd@frogs.com', 'freddythefrogman');

describe('Engineer Class', () => {
    it("Holds a 'name' parameter", () => {
        expect(freddy.name).toBe('Freddy');
    }); 

    it("Holds an 'id' parameter", () => {
        expect(freddy.id).toBe(1);
    }); 

    it("Holds an 'email' parameter", () => {
        expect(freddy.email).toBe('freddytodd@frogs.com');
    }); 

    it("Holds a 'github' parameter", () => {
        expect(freddy.github).toBe('freddythefrogman');
    })

    it("Returns the role of 'Engineer'", () => {
        expect (freddy.getRole()).toBe('Engineer');
    });
});