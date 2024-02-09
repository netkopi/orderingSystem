const express = require('express');
const router = express.Router();
const { home, cart, product } = require('../controllers/controller');


// PAGE NAVIGATIONS //
router.get('/', home);
router.get('/cart', cart);
router.get('/product', product);


module.exports = {
    router
}