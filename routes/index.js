const router = require('express').Router();

router.use('/sodas', require('./sodas'));
router.use('/orders', require('./orders'));
router.use('/', require('./swagger'));

module.exports = router;