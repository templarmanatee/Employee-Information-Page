const { Employee } = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(); 
        this.officeNumber = officeNumber; 
    }
    
    get officeNumber() {
        return this.officeNumber; 
    }

    get role() {
        return 'Manager'; 
    }
}

module.exports = Manager; 