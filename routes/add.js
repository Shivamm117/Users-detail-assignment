const express = require('express');
const { route } = require('express/lib/application');

const router = express.Router();

const users = [];

router.get('/add', (req,res,next) => {
    res.render('add', {
        pageTitle:'Add user',
    });
});

router.post('/add', (req,res,next) =>{
    users.push({title : req.body.title});
    res.redirect('/');
})

exports.routes = router;
exports.users = users;