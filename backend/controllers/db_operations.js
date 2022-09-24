const dotenv = require('dotenv'); //für .env file
dotenv.config();
const { Pool } = require('pg');

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
    let updateQuery = [id];
    let updateFields = [];
    updates.forEach((element, index) => {
        updateQuery.push(element.value)
        updateFields.push(element.field + '=$' + (index + 2))
    })

    console.log('req.body', req.body);
    console.log('updateQuery', updateQuery);
    console.log('updateFields', updateFields);

    sql = `
        UPDATE ${table} 
        SET ${updateFields.toString(', ')} 
        WHERE id=$1`;

    return pool.query(sql, updateQuery);
}

async function getBlogs() {
    return pool.query(`SELECT id, title, date_time, author_name, content_text, picture, special, category_id FROM blog`)
        .then((data) => {
            return data.rows;
        })
}

async function insertBlogPost(update) {
    return pool.query(`
    insert into blog (title, date_time, author_name, content_text, picture, special, category_id) 
    values ($1, $2, $3, $4, $5, $6, $7)
    returning *;`,
        [
            update.title,
            date_time,
            author_name,
            content_text,
            picture,
            special,
            category_id,
        ]
    )
    .then((data) => {
        return data.rows;
    })
}

module.exports = {
    patchTable,
    getBlogs,
    insertBlogPost,
}