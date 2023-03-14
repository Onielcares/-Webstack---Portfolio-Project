const express = require('express');
const tourController = require('./../controllers/categoryControllers');

const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
