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
        name: "descript",
        message: "Please write a short description of your project."
    },{
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
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
    },{
        type: "input",
        name: "repo",
        message: "What does the user need to know about contributing to the repo?"
    }
])


.then(answers => {
    const {username, email, URL, pName, descript, license, install, runTests, useRepo, repo} = answers;
    

    //creates the README text
READMEtext = `${username}
${email}
${URL}

## ${pName}

${descript}

${license}

${install}

${runTests}

${useRepo}

${repo}`

//writes the README file
    fs.writeFile("README.txt", READMEtext, function(err) {

        if (err) {
          return console.log(err);
        }
        console.log("README created!")
});
})
