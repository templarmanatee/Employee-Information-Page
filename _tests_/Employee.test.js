const Employee = require('../lib/Employee'); 

describe('Employee Class', () => {
    it('Takes in 3 parameters: name, id, and email', () => {
        const freddy = new Employee('Freddy', 1, 'freddytodd@frogs.com');
        
        expect(freddy.name).toBe('Freddy');
        expect(freddy.id).toBe(1);
        expect(freddy.email).toBe('freddytodd@frogs.com');
    });

    it("Returns the role of 'Employee'", () => {
        const amanda = new Employee('Amanda', 2, 'edgarallenslowbro@gmail.com');

        expect (amanda.role).toBe('Employee');
    });
})