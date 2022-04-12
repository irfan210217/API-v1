const axios = require('axios');
const express = require('express');
const router = express.Router();
const { UrlBase } = require('../config/telkomselApi/configTelkomsel');
const base64 = require('base64-js');


router.post('/passwordless/start', async (req, res) => {
    const phone = req.body.phoneNumber;
    const headers = {
        'AM-CLIENTID': UrlBase.api.clientID,
        'AM-PHONENUMBER': phone,
        'AM-SEND': UrlBase.api.type,
        code: base64.toByteArray(req.body.codeAccess).byteOffset.toFixed(65) 
    }

    if (phone === '') {
        res.status(500).json({
            message: 'Bad Request, Forbiden'
        })
    } else {
        axios({
            method: 'post',
            url: await `${UrlBase.api.url}/${UrlBase.api.path}`,
            headers: headers
        })
            .then(() => {
                res.status(200).json({
                    message: 'Success Request OTP',
                    code: 200
                })
            })
            .catch(() => {
                res.status(500).json({
                    message: 'Internal Server Error',
                    code: 500
                })
            })
    }
})

module.exports = router;
