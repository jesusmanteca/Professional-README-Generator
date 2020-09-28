// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description 

${data.projectDescription}

## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation

${data.installationInstuctions}

## Usage 

${data.usageInfo}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.



## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


---

🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
![License](https://img.shields.io/badge/License-${data.badges}-blue.svg) 

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