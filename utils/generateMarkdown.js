// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  
  # ${answers.projectTitle}

  ## Description
    ${answers.description}

  ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)

  ## Installation
    ${answers.installation}

  ## Usage
    ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 

  `;
}

module.exports = generateMarkdown;
