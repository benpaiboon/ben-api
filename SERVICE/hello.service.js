// Init Model
const helloModel = require('../MODEL/hello.model');

module.exports = helloService = {
  getAll: async (req, res) => {
    try {
      const modelObj = { colName: 'hello_col' };
      const doc = await helloModel.getAll(modelObj);
      return await res.status(200).send(doc);

    } catch (error) {
      console.error(error);
      return await res.status(500).json({ error: error.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const modelObj = {
        colName: 'hello_col',
        query: { hello_id: req.params.hello_id }
      }
      const doc = await helloModel.getOne(modelObj);
      return await res.status(200).send(doc);

    } catch (error) {
      console.error(error);
      return await res.status(500).json({ error: error.message });
    }
  }
}