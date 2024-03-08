const db = require('../db')

async function findAll() {
    const sql = `
        SELECT * FROM pastries;
    `
    let result = await db.query(sql)

    return result.rows
}

// async function findOneById(id) {
//     const sql = `
//         SELECT * FROM pastries
//         WHERE id = $1;
//     `
//     let result = await db.query(sql, [id])

//     return result.rows[0]
// }

module.exports = {
    findAll,
    // findOneById
}