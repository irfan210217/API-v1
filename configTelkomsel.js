// Require Packages Module
const axios = require('axios');
const express = require('express');
const router = express.Router()

const configTelkomsel = {

    // Request API
    UrlBase: {
        api: {
            url: 'https://ciam.telkomsel.com',
            path: 'iam/v1/realms/tsel',
            clientID : '8358628d8a070b0f472fcbd4def4ba7d',
            type : 'link'
        }
    }
};


module.exports = configTelkomsel;