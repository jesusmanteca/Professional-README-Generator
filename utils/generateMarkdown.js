// function to generate markdown for README
function badge(license){
  return `![Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
}
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description 

${data.projectDescription}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [Tests](#Tests) 
* [Languages](#Languages) 

## Installation

${data.installationInstuctions}

## Usage 

${data.usageInfo}

---
## License

  The application is covered under the ${data.license} license.
  
  ${badge(data.license)}

## Contributing

${data.contributionGuidelines}

## Tests

${data.testInstructions}

## Languages Used

${data.languages}

## For More Information

${data.github}
${data.email}

`;
}
module.exports = generateMarkdown;