DROP TABLE IF EXISTS Users CASCADE;

CREATE TABLE Users (
  username varchar(50) PRIMARY KEY,
  password varchar(50) NOT NULL,
  name varchar(50),
  balance money
);