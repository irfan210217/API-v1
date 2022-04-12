//  Require Packages Module
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// const buffer = require('base64-arraybuffer');

// Require Directory
const sholat = require('./API/Muslim/sholat');
const tsel = require('./API/Telkomsel/Main')

// Routes Use
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
// router.use(buffer)
router.use('/api/v1/sholat',sholat);
router.use('/api/v2', tsel);

// Handling Error Directory
router.use('/',(req, res, next)=>{
    res.status(500).json({
        msg : 'Internal Server Error',
        code : 500
    })
    next();
})

router.get('/',(req, res) =>{
    const version = require('./package.json')
    res.status(200).json({
        Message : "Backed Server",
        Description : null,
        version : version.version,
        Dev : 'Irfan Suprianto',

    })
})


module.exports = router;