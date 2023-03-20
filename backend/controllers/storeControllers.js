const Store = require('../models/storeModel');

exports.addStore = async (req, res) => {
  try {
    const { name, url } = req.body;
    const store = await Store.create({
      name: name,
      url: url
    });
    return res.status(201).json({
      status: 'Success',
      code: 201,
      store: store.name,
      url: store.url
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to add store'
    });
  }
};

exports.getStore = async (req, res) => {
  try {
    const stores = await Store.find();

    return res.status(200).json({
      status: 'Success',
      code: 200,
      data: stores
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to get stores!'
    });
  }
};

exports.updateStore = async (req, res) => {
  const { id } = req.params;
  const update = { name: req.body.name, url: req.body.url };
  const opts = { new: true, runValidators: true };
  try {
    const store = await Store.findByIdAndUpdate(id, update, opts);

    return res.status(200).json({
      status: 'Success',
      code: 201,
      data: store
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to update store!'
    });
  }
};

exports.deleteStore = async (req, res) => {
  const { id } = req.params;
  try {
    const store = await Store.findByIdAndDelete(id);

    return res.status(200).json({
      status: 'Success',
      code: 200,
      data: `${store.name} Store has been deleted!`
    });
  } catch {
    return res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Unable to delete store!'
    });
  }
};
