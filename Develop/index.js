var fs = require('fs');
var inquirer = require('inquirer')


// Inquirer questions
inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },{
        type: "input",
        name: "email",
        message: "What is your email?"
    },{
        type: "input",
        name: "URL",
        message: "What is the URL to your project?"
    },{
        type: "input",
        name: "pName",
        message: "What is your project's name?"
    },{
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },{
        type: "checkbox",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Apache-2.0",
            "ISC"]
    },{
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
    },{
        type: "input",
        name: "runTests",
        message: "What command should be run to run tests?"
    },{
        type: "input",
        name: "useRepo",
        message: "What does the user need to know about using the repo?"
    },
])


.then(answers => {
    const {username, email, URL, pName, description, license, install, runTests, useRepo} = answers;
    

//creates the README text using answers from prompts
READMEtext = `## ${pName}

##### Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)


## *Description* 
${description}

This project uses: ${license}

Command to install: ${install}

Command to run tests: ${runTests}


${useRepo}

## Contact Me
${username}
${email}
${URL}`

//writes the README file
    fileName = answers.pName + ".md"
    fs.writeFile(fileName, READMEtext, function(err) {

        if (err) {
          return console.log(err);
        }
        console.log("README created!")
});
})
