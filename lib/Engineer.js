const { Employee } = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, officeNumber) {
        super(); 
        this.officeNumber = officeNumber; 
    }
    
    get officeNumber() {
        return this.officeNumber; 
    }

    get role() {
        return 'Engineer'; 
    }
}

module.exports = Engineer; 