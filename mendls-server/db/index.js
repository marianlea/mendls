const { Pool } = require('pg')

if (!process.env.DATABASE_URL) {
    throw Error('database url missing')
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

module.exports = pool