const Product = require('./../models/productModel');

exports.addProduct = async (req, res) => {
  try {
    const { name, category, store } = req.body;
    const product = await Product.create({
      name,
      category,
      store
    });
    return res.status(201).json({
      status: 'Success',
      code: 201,
      product: product.name,
      category: product.category,
      store: product.store
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unabe to add product'
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find();

    return res.status(200).json({
      status: 'Success',
      code: 200,
      data: product
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to get products!'
    });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, store } = req.body;
  const update = { name, category, store };
  const opts = { new: true, runValidators: true };
  try {
    const product = await Product.findByIdAndUpdate(id, update, opts);

    return res.status(200).json({
      status: 'Success',
      code: 201,
      data: product
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to update product!'
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);

    return res.status(200).json({
      status: 'Success',
      code: 200,
      data: `${product.name} product has been deleted!`
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to delete product!'
    });
  }
};

exports.searchProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const regex = new RegExp(name, 'i');
    const searchProducts = await Product.find({ name: { $regex: regex } });

    if (!searchProducts.length) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Product not found'
      });
    }
    const products = await searchProducts
      .populate('category', 'name')
      .populate('stores', 'name link');

    // Map the product data to an array containing the category name and store names and links for each product
    const data = products.map(product => ({
      category: product.category.name,
      stores: product.stores.map(store => ({
        name: store.name,
        link: store.link
      }))
    }));

    res.json({ data });
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
