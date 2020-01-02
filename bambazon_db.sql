DROP DATABASE IF EXISTS bambazon_DB;

CREATE DATABASE bambazon_DB;

USE bambazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(256) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Organic Bananas", "Fresh Fruit", 0.15, 100),
("Organic zzzStrawberies", "Fresh Fruit", 1.25, 450),
("Organic Apples", "Fresh Fruit", 0.35, 50),
("Organic Pears", "Fresh Fruit", 0.30, 40),
("Organic Dragon Fruit", "Fresh Fruit", 2.15, 45),
("Organic Chicken Breasts", "Meats", 4.45, 30),
("Organic Chicken Thighs", "Meats", 9.45, 60),
("Organic Chicken Whole", "Meats", 8.00, 10),
("Organic Chicken liver", "Meats", 1.45, 25),
("Organic Chicken Thighs", "Meats", 4.45, 30);
