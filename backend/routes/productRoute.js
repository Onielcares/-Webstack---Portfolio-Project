const express = require('express');
const productController = require('../controllers/productControllers');

const router = express.Router();
router
  .route('/')
  .post(productController.addProduct)
  .get(productController.getProduct);

router
  .route('/:id')
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
