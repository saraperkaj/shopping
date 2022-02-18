DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS product;

CREATE TABLE product (
    id SERIAL PRIMARY KEY, 
    img TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(6,2) NOT NULL,
    rating INT CHECK(rating > 0 AND rating <= 5),
    featured BOOLEAN
);
