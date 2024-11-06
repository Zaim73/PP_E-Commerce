const router = require('express').Router();

router.get('/');
router.get('/login');
router.get('/register');
router.get('/logout');
router.get('/products');
router.get('/products/add');
router.get('/products/:id/buy');
router.get('/products/:id/update');
router.get('/products/:id/delete');

module.exports = router;
