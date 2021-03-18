DROP DATABASE IF EXISTS greatbayDB;

CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  currentBid DECIMAL(10,2) NOT NULL,
  itemDescription VARCHAR(250) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, currentBid, itemDescription)
VALUES ("Hammer", 2.50, "A tool to hammer things.");

INSERT INTO products (item, currentBid, itemDescription)
VALUES ("Housekeeping", 100.00, "A one time housekeeping task to bid on.");

INSERT INTO products (item, currentBid, itemDescription)
VALUES ("Dog", 175.00, "A furry companion.");