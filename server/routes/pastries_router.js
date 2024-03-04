const express = require('express')

const router = express.Router()
const Pastries = require('../models/pastries')

router.get('/api/pastries', async (req, res) => {
    let pastries = await Pastries.findAll()
    res.json(pastries)
})

router.get('/api/pastries/:id', async (req, res) => {
    let pastry = await Pastries.findOneById(req.params.id)
    res.json(pastry)
})


module.exports = router