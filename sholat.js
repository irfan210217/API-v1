const axios = require('axios');
const {getJadwal} = require('../config/muslimApi/configMuslimApi');
const express = require('express');
const router = express.Router();

router.get('/cekID/:kota', async (req, res) => {
    const kota = req.params.kota;
    axios({
        method: 'get',
        url: await `${getJadwal.api}/sholat/kota/cari/${kota}`
    })
        .then(async response => {
            res.json({
                msg: 'cari keyword di parameter',
                data: await response.data.data
            })
        })
})


router.post('/jadwal/:id/:tahun/:bulan', async (req, res) => {
    const jadwal = {
        id: req.params.id,
        tahun: req.params.tahun,
        bulan: req.params.bulan
    }
    axios({
        method: 'get',
        url: await `${getJadwal.api}/sholat/jadwal/${jadwal.id}/${jadwal.tahun}/${jadwal.bulan}`
    })
        .then(response => {
            res.json({
                msg: 'Sukses',
                data: {
                    Daerah: {
                        Lokasi: response.data.data.lokasi,
                        provinsi: response.data.data.daerah
                    },
                    Jadwal : response.data.data.jadwal
                }
            })
        })
});

module.exports = router;