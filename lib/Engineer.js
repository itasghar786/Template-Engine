// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ('/Users/abdullah/engine1/engine2/Template-Engine/lib/Employee.js');
class Engineer extends Employee {
    constructor(name,id,email,role,github){
        super(name,id,email,role)
        this.github= github
    }
}
module.exports = Engineer;



