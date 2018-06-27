const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req, res) => {
    queries.getAll().then(art_cards => {
        res.json(art_cards);
    })
})

module.exports = router;