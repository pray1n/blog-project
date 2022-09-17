const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: true,
    ssl: { rejectUnauthorized: false },
})

async function patchTable(table, fieldMapping, id, req) {
    const updates = Object.keys(req.body).map((param) => {
        return {
            field: fieldMapping[param],
            value: req.body[param],
        }
    })
    let updateQuery = [id]
    let updateFields = []
    updates.forEach((element, index) => {
        updateQuery.push(element.value)
        updateFields.push(element.field + '=$' + (index + 2))
    })

    console.log('req.body', req.body)
    console.log('updateQuery', updateQuery)
    console.log('updateFields', updateFields)

    sql = `
    UPDATE ${table} 
    SET ${updateFields.toString(', ')} 
    WHERE id=$1`

    console.log('sql', sql)
    return pool.query(sql, updateQuery)
}

function getBlogs() {}
