const Category = require('../model/categoryModel');

exports.addProduct = async (req, res) => {
  const { name, parent } = req.body;
  try {
    const category = await Category.create({
      name: name,
      parent: parent
    });
    return res.status(201).json({
      status: 'Success',
      category: category.name,
      parent: category.parent
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      statusCode: 500,
      message: 'Unabe to create categories'
    });
  }
};
