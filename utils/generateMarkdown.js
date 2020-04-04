






// TODO: Return markdown string for README file given a data object.
function generateMarkdown(data, answers) {
  return `
# ${answers.title}
[![License: MPL 2.0](https://img.shields.io/badge/License-${answers.license}%20-brightgreen.svg)]
## Description
${answers.description}

## Installation
To install the necessary dependencies, run the following commands
${answers.installation}

## Usage
${answers.usage}
## License
This project is licensed under ${answers.license}

## Contributing
${answers.contributing}

## Tests 
To run tests, run the following command
${answers.test}
## Questions
If you have any questions, you could email me at ${answers.email}, or message me on github ${data.url}
![Github avatar](${data.avatar_url})

`;
}

module.exports = generateMarkdown;
