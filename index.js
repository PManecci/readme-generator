// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Write a brief description of your project: (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process if any: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can your user utilize this project? ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the appropriate license for this project: ',
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    ]);
};

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateMarkdown(answers);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
}


// Function call to initialize app
init();
