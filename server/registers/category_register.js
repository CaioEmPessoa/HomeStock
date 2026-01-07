const debug = require('../utilities/debug');

class categoryRegister {
    init(query) {
        this.query = query
    }

    createTable() {
        debug.log("Creating category table...")
        const sql = `
            CREATE TABLE IF NOT EXISTS categories (
                category_id INT NOT NULL AUTO_INCREMENT,
                category_name VARCHAR(100),
                category_image VARCHAR(300),
                category_icon_text CHAR(1),
                PRIMARY KEY (category_id)
            );
        `;

        this.query(sql, "Created category table.");
    }

    getAll() {
        const sql = `
            SELECT * FROM categories;
        `;

        let response = this.query(sql);
        console.log(response)
    }
}

module.exports = new categoryRegister();