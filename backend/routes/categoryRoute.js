const express = require('express');
const categoryController = require('./../controllers/categoryControllers');

const router = express.Router();

router.route('/').get(categoryController.addProduct);

module.exports = router;
