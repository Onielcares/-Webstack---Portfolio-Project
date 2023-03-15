const express = require('express');
const categoryController = require('./../controllers/categoryControllers');

const router = express.Router();
router
  .route('/')
  .post(categoryController.addCategory)
  .get(categoryController.getCategory);

router
  .route('/:id')
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
