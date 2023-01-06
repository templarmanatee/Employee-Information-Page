const { Employee } = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(); 
        this.school = school; 
    }
    
    get school() {
        return this.school; 
    }

    get role() {
        return 'Intern'; 
    }
}

module.exports = Intern; 