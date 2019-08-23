// Init Model
// const settingModel = require('../models/settingModel');
// const ObjectId = require('mongodb').ObjectId;

// Send response to Router
const bookController = {
  getAll: async (req, res) => {
    try {
      // const query = {};
      // const docs = await settingModel.getAllData(query);
      // if (docs.length === 0) res.status(500).json({ err: `No any data in database` });
      res.status(200).json({ msg: 'book data' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: error.message });
    }
  }
}

module.exports = bookController;