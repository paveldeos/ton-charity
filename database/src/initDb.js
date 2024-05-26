const pool = require('./db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS campaigns (
    id SERIAL PRIMARY KEY,
    CampaignName VARCHAR(255) NOT NULL,
    Description TEXT,
    TargetValue FLOAT NOT NULL,
    CurrentValue FLOAT NOT NULL DEFAULT 0,
    Active BOOLEAN NOT NULL,
    TargetAddress VARCHAR(255) NOT NULL
);
`;

pool.query(createTableQuery)
    .then(res => {
        console.log('Table is successfully created');
        pool.end();
    })
    .catch(err => {
        console.error('Error creating table', err);
        pool.end();
    });
