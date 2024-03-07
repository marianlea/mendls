-- CREATE DATABASE mendls_api;

CREATE TABLE pastries (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(7, 2),
    unit INTEGER
);
