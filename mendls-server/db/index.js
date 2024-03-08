const { Pool } = require('pg')
const fs = require('fs')
require('dotenv').config()

if (!process.env.POSTGRES_URL) {
    throw Error('database url missing')
}

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

  
module.exports = pool