const express = require('express');
const categoryController = require('./../controllers/categoryControllers');

const router = express.Router();
router
  .route('/')
  .post(categoryController.addProduct)
  .get(categoryController.getProduct);

module.exports = router;
