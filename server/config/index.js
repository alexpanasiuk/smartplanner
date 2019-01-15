require('dotenv').config();

module.exports = {
    DB_USER: process.env.DB_USER,
    DB_HOST: `mongodb://${process.env.DB_HOST}`,
    DB_PASS: process.env.DB_PASS,
    SECRET: process.env.SECRET,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_SENDER: process.env.MAIL_SENDER,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    SITE_URL: process.env.SITE_URL,
    SERVER_URL: process.env.SERVER_URL,
}