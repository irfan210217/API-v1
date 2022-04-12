// Require Packages Module
const axios = require('axios');
const express = require('express');
const router = express.Router()

const configTelkomsel = {

    // Request API
    UrlBase: {
        api: {
            url: '',
            path: '',
            clientID : '',
            type : ''
        }
    }
};


module.exports = configTelkomsel;
