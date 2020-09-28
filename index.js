const fs = require('fs');
const inquirer = require('inquirer');
var generateMarkdown = require("./utils/generateMarkdown.js");

//prompt user and generate questions
const promptUser = () => {

    return inquirer.prompt(
        
        [
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Please describe your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please describe your project!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'installationInstuctions',
        message: 'Please explain installation instructions. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please exaplain how to install your project!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usageInfo',
        message: 'Provide instructions and examples for use. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please exaplain how to install your project!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please explain how others can contribute. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please explain how others can contribute!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: 'Please explain how others can test the application. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('lease explain how others can test the application!');
              return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please provide your Github username. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please provide your Github username!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address where others can reach you with additional questions. (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please provide your email address!');
              return false;
            }
          }
      },
    ]
    
    )
  };

// function to write README file
function writeToFile(data) {

    fs.writeFile('./dist/README.md', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}


// function to initialize program
const init = () => {
promptUser()
.then(userData => {
    const newREADME = generateMarkdown(userData)
    writeToFile(newREADME)
})

}
// function call to initialize program
init();
