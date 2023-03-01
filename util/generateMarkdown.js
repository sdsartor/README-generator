// Initially this would not back tick out and caused me to redo my original code, turns out the problem was I was using a single quote instead of a back tick.
function generateMarkdown(data) {
return `# ${data.Title}
https://github.com/${data.Username}/${data.Title}
## Description
${data.Description}
## Installation
${data.Installation}
## Usage
${data.Usage}
## Credits
${data.Credits}
## License
${data.License}`
};


// This is the template that uses the answers from the questions array.

module.exports = generateMarkdown;
;