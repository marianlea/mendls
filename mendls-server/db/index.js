const { Pool } = require('pg')
const fs = require('fs')
require('dotenv').config()

const seedQuery = fs.readFileSync('db/seed', 'utf-8')

if (!process.env.POSTGRES_URL) {
    throw Error('database url missing')
}

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

pool.query(seedQuery, err => {
  if (err) {
    throw err
  }
  console.log('SQL seed completed')
})

  
module.exports = pool