const dotenv = require('dotenv') //für .env file
dotenv.config()
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

    return pool.query(sql, updateQuery)
}

async function getBlogs() {
    return pool.query(`select * FROM blog`).then((data) => {
        return data.rows
    })
}

async function getOneBlog(id) {
    return pool
        .query(
            `SELECT title, date_time, author_name, content_text, picture, special, category_name from blog WHERE id = $1`,
            [id]
        )
        .then((data) => {
            return data.rows
        })
}

async function getCategories() {
    return pool.query('SELECT * from category').then((data) => {
        return data.rows
    })
}

async function getUserByEmail(email) {
    return pool
        .query(`SELECT email from users WHERE email = $1`, [email])
        .then((data) => {
            return data.rows
        })
}

async function insertBlogPost(update) {
    return pool
        .query(
            `
    insert into blog (title, date_time, author_name, content_text, picture, special, category_name) 
    values ($1, $2, $3, $4, $5, $6, $7)
    returning *;`,
            [
                update.body.title,
                update.body.date_time,
                update.body.author_name,
                update.body.content_text,
                update.body.picture,
                update.body.special,
                update.body.category_name,
            ]
        )
        .then((data) => {
            return data.rows
        })
}

async function addUser(email, password) {
    return pool
        .query(
            `INSERT INTO users (email, password) values ($1, $2) returning *;`,
            [email, password]
        )
        .then((data) => {
            return data.rows
        })
}

module.exports = {
    patchTable,
    getBlogs,
    getOneBlog,
    insertBlogPost,
    getCategories,
    addUser,
    getUserByEmail,
}
