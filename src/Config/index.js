'use strict';
require('dotenv').config();

module.exports = {
    public_key: process.env.PUBLIC_KEY,
    secret_key: process.env.SECRET_KEY,
    environment: process.env.ENVIRONMENT
}