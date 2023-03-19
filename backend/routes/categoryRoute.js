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

router.get('/base', categoryController.getCategoriesWithoutParent);
router.get('/children/:parentId', categoryController.getCategoriesWithChildren);
router.post('/search/:id', categoryController.searchProductInCategory);

module.exports = router;
