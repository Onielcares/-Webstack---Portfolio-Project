const Category = require('../models/categoryModel');
const Product = require('../models/productModel');

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
      message: 'Unabe to add categories'
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    // const categoryList = await createCategories(categories);
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

// Handler to retrieve all categories without a parent
exports.getCategoriesWithoutParent = async (req, res) => {
  try {
    const categories = await Category.find({ parentId: null });

    return res.status(200).json({
      status: 'Success',
      code: 201,
      data: categories
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Server error'
    });
  }
};

// Handler to retrieve categories with their children based on parentId parameter
exports.getCategoriesWithChildren = async (req, res) => {
  try {
    const { parentId } = req.params;

    // Find the parent category and all its children recursively
    const findChildren = async parent => {
      const category = await Category.findById(parent);
      if (!category) return null;
      const children = await Category.find({ parentId: parent });
      const childCategories = await Promise.all(
        children.map(child => findChildren(child._id))
      );
      return { ...category.toJSON(), children: childCategories };
    };

    const category = await findChildren(parentId);
    if (!category)
      return res.status(404).json({
        status: 'error',
        code: 500,
        message: 'Category not found'
      });
    res.status(200).json({
      status: 'Success',
      code: 201,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to delete category!'
    });
  }
};

exports.searchProductInCategory = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  try {
    const regex = new RegExp(name, 'i');
    const searchProducts = await Product.find({
      name: { $regex: regex },
      category: id
    })
      .populate('categories')
      .populate('stores');

    if (!searchProducts.length) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Product not found'
      });
    }

    const data = searchProducts.map(product => ({
      product: product.name,
      category: product.category.name,
      stores: product.stores.map(store => ({
        name: store.name,
        url: store.url
      }))
    }));

    return res.status(200).json({
      status: 'Success',
      code: 200,
      data
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to search product!'
    });
  }
};
