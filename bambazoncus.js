//Install  the needed "node" packages
var mysql = require("mysql");
var inquirer = require("inquirer");

//Connect to mysql
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

//Retreive the producct list from the mysql table products
function displayProducts() {
    // console.log("--------------------------");
    console.log("Items that are available for sale:\n");

    connection.query("SELECT * FROM products", function(err, res) {
            if (err) throw err;

            for (var i = 0; i < res.length; i++) {
                console.log(`Item ID: ${res[i].item_id}`);
                console.log(`Product: ${res[i].product_name}, Price: ${res[i].price}`);
            };

            // console.log("--------------------------\n");

            inquirer.prompt([{
                    type: "input",
                    name: "user_item_id",
                    message: "Enter the ID# of the item you'd like to buy?"
                },
                {
                    type: "input",
                    name: "user_quantity",
                    message: "How many would you like to buy?"
                }
            ]).then(function(answer) {
                    var item_id = answer.user_item_id
                    var quantity = answer.user_quantity

                    console.log(`Product ID: ${item_id}`);
                    console.log(`Product Quantity: ${quantity}`);

                    connection.query("SELECT * FROM products WHERE ?", { item_id: item_id }, function(err, data) {
                            if (err) throw err;

                            // if (data.length === 0) {
                            console.log("Invalid, please select a valid ID!\n");

                            displayProducts();
                        } else {

                            var product = data[0];

                            if (quantity <= product.stock_quantity) {
                                console.log("-------------------------------");
                                console.log("Placing your order, thank you!");
                                console.log("-------------------------------\n");

                                // Put in variable because it's a long string inside the query
                                var updateQuantity = `UPDATE products SET stock_quantity = ${product.stock_quantity 
                            - quantity} WHERE item_id = ${item_id}`;

                                connection.query(updateQuantity, function(err, data) {
                                    if (err) throw err;

                                    inquirer.prompt([{
                                        type: "list",
                                        name: "shopAgain",
                                        message: "Another purchase?",
                                        choices: ["Yes", "No"]
                                    }]).then(function(answer) {
                                        if (answer.shopAgain === "Yes") {
                                            displayProducts();
                                        } else {
                                            console.log("Thank you, come again!");

                                            connection.end();
                                        };
                                    });
                                });
                            } else {
                                console.log("Insufficient quantity in stock, please modify your order!\n");

                                displayProducts();
                            }
                        }
                    });
            });
    });

};

// function checkInventory() {

// };