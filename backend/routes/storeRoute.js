const express = require('express');
const storeController = require('../controllers/storeControllers');

const router = express.Router();
router
  .route('/')
  .post(storeController.addStore)
  .get(storeController.getStore);

router
  .route('/:id')
  .patch(storeController.updateStore)
  .delete(storeController.deleteStore);

module.exports = router;
