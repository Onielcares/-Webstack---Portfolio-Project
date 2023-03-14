const Category = require('../models/categoryModel');

exports.addProduct = async (req, res) => {
  try {
    const category = await Category.create({
      name: req.body.name,
      parent: req.body.parent
    });
    return res.status(201).json({
      status: 'Success',
      code: 201,
      category: category.name,
      parent: category.parent
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unabe to create categories'
    });
  }
};

exports.getProduct = (req, res) => {
  res.status(500).json({
    status: 'error',
    code: 500,
    message: 'This route is not yet defined!'
  });
};
