const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer.js");

const team = [];

// Write code to use inquirer to gather information about the development team members,
function managerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "managerName"

        },
        {
            type: "input",
            message: "what is your role?",
            name: "role"

        },
        {
            type: "input",
            message: "what is your Email?",
            name: "email"

        },
        {
            type: "input",
            message: "what is your office number?",
            name: "number"

        },
        {
            type: "input",
            message: "what is your ID?",
            name: "id"

        }])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.role, data.number)
            team.push(manager)
            nextEmployee()
        })
    }
function nextEmployee() {
    inquirer.prompt({
        type: "list",
        message: "What type of employee would you like to add next?",
        name: "role",
        choices: [
            "Engineer",
            "Intern",
            "No more employees"
        ]
    })
    .then(data => {

    const role = data.role
    switch (role) {

    case "Intern":
    internInfo();
    break;
    case "Engineer":
    engineerInfo();
    break;
    case "No more employees":
    return;
    
    }
        })
}

function internInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name"

        },
        {
            type: "input",
            message: "what is your role?",
            name: "role"

        },
        {
            type: "input",
            message: "what is your Email?",
            name: "email"

        },
        {
            type: "input",
            message: "what is your school name?",
            name: "school"

        },
        {
            type: "input",
            message: "what is your ID?",
            name: "id"

        }])
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.role, data.school)
            team.push(intern)
            nextEmployee()
        })
}
function engineerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "what is your name?",
            name: "name"

        },
        {
            type: "input",
            message: "what is your role?",
            name: "role"

        },
        {
            type: "input",
            message: "what is your Email?",
            name: "email"

        },
        {
            type: "input",
            message: "what is your Git Hub?",
            name: "github"

        },
        {
            type: "input",
            message: "what is your ID?",
            name: "id"

        }])
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.role, data.github)
            team.push(engineer)
            nextEmployee()
        })
}

// here Im making classes with employee as the base class 
function writeOutputFile() {
 render([manager, intern,engineer]);


 fs.writeFile(outputPath, JSON.stringify(render), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    })
}

managerInfo();



// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```



