// Init MongoContext
const MongoContext = require('../data.context/mongo.context');

// Injectable Service
const HelloService = require('../services/hello.service');

// Send response to Router
module.exports = HelloController = {
  getHello: async (req, res) => {
    try {
      const doc = await MongoContext.findAll('hello_col');
      return await res.status(200).send(doc);
    } catch (error) {
      console.error(error);
      return await res.status(500).json({ error: error.message });
    }
  },
  getHelloById: async (req, res) => {
    try {
      const filter = { hello_id: req.params.hello_id };
      const doc = await MongoContext.findOne('hello_col', filter);
      return await res.status(200).send(doc);
    } catch (error) {
      console.error(error);
      return await res.status(500).json({ error: error.message });
    }
  },
  createHello: async (req, res) => {
    try {
      const insertObj = {
        hello_id: await HelloService.generateHelloId(),
        name: req.body.name
      }
      const doc = await MongoContext.insertOne('hello_col', insertObj);
      return await res.status(200).send(doc);

    } catch (error) {
      console.error(error);
      return await res.status(500).json({ error: error.message });
    }
  },
  updateHello: async (req, res) => {
    try {
      const filter = { hello_id: req.params.hello_id };
      const updateObj = { $set: { name: req.body.name } };
      const doc = await MongoContext.updateOne('hello_col', filter, updateObj);
      return await res.status(200).send(doc);
    } catch (error) {
      console.error(error);
      return await res.status(500).json({ error: error.message });
    }
  },
  deleteHello: async (req, res) => {
    try {
      const deleteObj = { hello_id: req.params.hello_id }
      const doc = await MongoContext.deleteOne('hello_col', deleteObj);
      return await res.status(200).send(doc);
    } catch (error) {
      console.error(error);
      return await res.status(500).json({ error: error.message });
    }
  }
}