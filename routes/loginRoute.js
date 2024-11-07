const { home, login, loginPage, register, regisPage, logOut } = require('../controllers/ctrlLogin');

const router = require('express').Router();

router.get('/', home);
router.get('/login', login);
router.post('/login', loginPage);
router.get('/register', register);
router.post('/register', regisPage);
router.get('/logout', logOut);

module.exports = router;
