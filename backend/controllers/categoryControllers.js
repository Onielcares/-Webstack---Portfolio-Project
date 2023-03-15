const Category = require('../models/categoryModel');

exports.addCategory = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const category = await Category.create({
      name: name,
      parentId: parentId
    });
    return res.status(201).json({
      status: 'Success',
      code: 201,
      category: category.name,
      parentId: category.parentId
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unabe to create categories'
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();

    return res.status(200).json({
      status: 'Success',
      code: 200,
      data: categories
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to get categories!'
    });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const update = { name: req.body.name, parentId: req.body.parentId };
  const opts = { new: true, runValidators: true };
  try {
    const category = await Category.findByIdAndUpdate(id, update, opts);

    return res.status(200).json({
      status: 'Success',
      code: 201,
      data: category
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to update category!'
    });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndDelete(id);

    return res.status(200).json({
      status: 'Success',
      code: 200,
      data: `${category.name} category has been deleted!`
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to delete category!'
    });
  }
};
