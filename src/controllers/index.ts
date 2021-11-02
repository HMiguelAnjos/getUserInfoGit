import express from 'express';

const router: express.Router = express.Router();

router.use('/users', require('./users.controller'));

module.exports = router;
