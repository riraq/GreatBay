const mysql = require('mysql');
const inquirer = require('inquirer');

async function askQuestions () {
    const postbid = inquirer.prompt ([
        {
            type: "list",
            message: "Would you like to bid or post?",
            choices: ["Bid", "Post"],
            name: "postorbid"
        }
    ])
    .then((response) => {
        if (response.postorbid == "Bid" ) {

        }
        if (response.postbid == "Post") {

        };
    });
};

