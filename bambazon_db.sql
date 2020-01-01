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
VALUES ("Organic Bananas", "Fresh Fruit", 0.15, 450),
("Organic Bananas", "Fresh Fruit", 0.15, 450),
("Organic Apples", "Fresh Fruit", 0.15, 450),
("Organic Pears", "Fresh Fruit", 0.15, 450),
("Organic Peaches", "Fresh Fruit", 0.15, 450),
("Organic Plumss", "Fresh Fruit", 0.15, 450),
("Organic Tangerines", "Fresh Fruit", 0.15, 450),
("Organic Grapefruits", "Fresh Fruit", 0.15, 450),
("Organic Qumquats", "Fresh Fruit", 0.15, 450),
("Organic Dragon Fruit", "Fresh Fruit", 0.15, 450),
("Organic Pluots", "Fresh Fruit", 0.15, 450);
