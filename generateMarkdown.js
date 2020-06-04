function generateMarkdown(data) {
    return `
    
    # ${data.title}
  
    ## Table of Contents
        * [Description]
        * [Installation]
        * [Usage]
        * [Contributing]
        * [Tests]
    
    ## Description
    
    ${data.description}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## Contributing

    ${data.contributing}

    ##Tests

    ${data.tests}

  `;
  }
  
  module.exports = generateMarkdown;