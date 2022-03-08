const express = require('express');
const router = express.Router();

const addData  = require('./add')

router.get('/', (req,res,next) =>{
    const users = addData.users;
    res.render('display', {
        pageTitle : 'Users',
        users : users
    })
})

exports.routes = router;
