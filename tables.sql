DROP TABLE transaction;
DROP TABLE source;

CREATE TABLE source (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  name TEXT UNIQUE NOT NULL  
);

CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE transaction (
  id SERIAL PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  source_id INT NOT NULL,
  category_id INT NOT NULL,
  date DATE NOT NULL,
  description TEXT NOT NULL,
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  CONSTRAINT fk_source FOREIGN KEY(source_id) REFERENCES source(id),
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE budget (
  id SERIAL PRIMARY KEY,
  category_id int NOT NULL,
  name TEXT UNIQUE NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id)
);

CREATE TABLE restriction (
  id SERIAL PRIMARY KEY,
  category_id int NOT NULL,
  source_id INT NOT NULL,
  name TEXT UNIQUE NOT NULL,
  CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category(id),
  CONSTRAINT fk_source FOREIGN KEY(source_id) REFERENCES source(id)
);