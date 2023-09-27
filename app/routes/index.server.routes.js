// Ramandeep Singh
// 301364879
// 27 Sept, 23
const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.redirect('/home');
})

router.get('/home', function(req, res, next){
    res.render('home', {title: 'Home'});
});
router.get('/about', function(req, res, next){
    res.render('about', {title: 'About'});
});
router.get('/projects', function(req, res, next){
    res.render('projects', {title: 'Projects'});
});
router.get('/contact', function(req, res, next){
    res.render('contact', {title: 'Contact'});
});
router.get('/services', function(req, res, next){
    res.render('services', {title: 'Services'});
});

router.post('/contact', function(req, res){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.number);
    console.log(req.body.budgets);
    console.log(req.body.message);
    res.redirect('/home');
})

module.exports = router;