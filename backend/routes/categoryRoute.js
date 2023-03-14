const express = require('express');
const categoryController = require('./../controllers/categoryControllers');

const router = express.Router();

router.route('/').post(categoryController.addProduct);

module.exports = router;
