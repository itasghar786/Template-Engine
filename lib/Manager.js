// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ('/Users/abdullah/engine1/engine2/Template-Engine/lib/Employee.js')
class Manager extends Employee {
    constructor (name, id, email,role,number){
        super(name,id,email,role)
        this.number= number
    }
}
module.exports = Manager;