import dotenv from 'dotenv';
import knex from 'knex';
dotenv.config();
export default function createConn() {
    var conn = knex({
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST || '127.0.0.1',
            port: Number(process.env.DB_PORT) || 3306,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'database',
        },
        log: {
            warn: function (message) { console.warn(message); },
            error: function (message) { console.error(message); },
            deprecate: function (message) { console.error(message); },
            debug: function (message) { console.log(message); },
        },
    });
    // console.log(JSON.stringify(conn.client.config.connection));
    return conn;
}
