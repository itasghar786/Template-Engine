
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('/Users/abdullah/engine1/engine2/Template-Engine/lib/Employee.js');

class Intern extends Employee {
    constructor (name,id,email,role,school){
        super(name,id,email,role)
        this.school=school
    }
}

module.exports = Intern;