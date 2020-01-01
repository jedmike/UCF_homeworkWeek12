var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // Your password
    password: "Amos1sofi",
    database: "bambazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("got here");
    console.log(`Connected as id ${connection.threadId}\n`);
    displayProducts();
});

function displayProducts() {
    console.log("got here");
}