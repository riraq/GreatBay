const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '',
    database: 'index.sql',
  });
  
  const afterConnection = () => {
    connection.query('SELECT * FROM products', (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  };
  
askQuestions();
const bidOnItem = () => {
    console.log('Showing all items...\n');
    connection.query('SELECT * FROM products', (err, res) =>{
        if (err) throw err;
        console.log("Listing all items: ", res);
    });

const listAllBid = inquirer.prompt ([
    {
        type: "list",
        message: "Would you like to bid or post?",
        choices: [`${res.id}`],
        name: "postorbid"
    }
]);

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
            bidOnItem();
            listAllBid();  
            };
        }
        // if (response.postbid == "Post") {

        // };
    );
};

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    afterConnection();
  });