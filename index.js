var inquirer = require('inquirer');

inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to enter a valid username';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to enter a title for your application';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your application?',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need a brief description of your application';
                }
                return true;
            }
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'What would you like to include in your README?',
            choices: [
                {name: 'Installation'},
                {name: 'Usage'},
                {name: 'License'},
                {name: 'Contributing'},
                {name: 'Tests'},
                {name: 'Questions'},
            ],
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to choose at least 1 option';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List specific steps for users to follow in order to install your application',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to list at least one step for users';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide users instructions on how to use your application',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to list your license';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please list your license if your project is open source, if not licenses... input N/A',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to list your license';
                }
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'contributing',
            message: 'Would you like to allow others to contribute to your project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Explain how to run tests for your application',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to describe tests for your application';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'questons',
            message: '?',
            validate: function(answer) {
                if (answer.length < 1) {
                    return 'You need to list your license';
                }
                return true;
            }
        },
    ])