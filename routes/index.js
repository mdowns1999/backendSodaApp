const router = require('express').Router();

router.use('/sodas', require('./sodas'));
router.use('/', require('./swagger'));

module.exports = router;