const pgp = require('pg-promise')();

const db = pgp(
  process.env.DATABASE_URL ||
    // modify the following string with your user name:
    // 'postgres://<username>@localhost:5432/<database name>');
    'postgres://mek212:mek123@localhost:5432/schoolmascots'
);

module.exports = db;
