function generateMarkdown(data) {
    return `
    # ${data.title}
  
    ## Table of Contents
        * [Description] (#Description)
        * [Installation] (#Installation)
        * [Usage] (#Usage)
        * [Contributing] (#Contributing)
        * [Tests] (#Tests)
    
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
  
  module.exports = {
      generateMarkdown: generateMarkdown
  }  
  