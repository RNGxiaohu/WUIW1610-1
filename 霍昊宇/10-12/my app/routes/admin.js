var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
});

//info
router.get('/info', function(req, res, next) {
    res.render('admin/info');
});

//pass
router.get('/pass', function(req, res, next) {
    res.render('admin/pass');
});

//user
router.get('/user', function(req, res, next) {
    res.render('admin/user');
});

//adv
router.get('/adv', function(req, res, next) {
    res.render('admin/adv');
});

//addadv
router.get('/addadv', function(req, res, next) {
    res.render('admin/addadv');
});

//cate
router.get('/cate', function(req, res, next) {
    res.render('admin/cate');
});

//addcate
router.get('/addcate', function(req, res, next) {
    res.render('admin/addcate');
});

//article
router.get('/article', function(req, res, next) {
    res.render('admin/article');
});

//message
router.get('/message', function(req, res, next) {
    res.render('admin/message');
});

//link
router.get('/link', function(req, res, next) {
    res.render('admin/link');
});

//addlink
router.get('/addlink', function(req, res, next) {
    res.render('admin/addlink');
});
module.exports = router;
