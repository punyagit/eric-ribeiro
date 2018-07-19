const express = require('express')
const router = express.Router();

const mongoose = require('mongoose');

router.post('/', (req, res, next) => {
    Signup.create(signup).then(signup => {
        resp.json(signup)
    })

})