// Init service
const helloService = require('../SERVICE/hello.service')

// Send response to Router
module.exports = helloController = {
  getAll: async (req, res) => {
    return await helloService.getAll(req, res);
  },
  getOne: async (req, res) => {
    return await helloService.getOne(req, res);
  },
  createOne: async (req, res) => {
    return await helloService.createOne(req, res);
  },
  editOne: async (req, res) => {
    return await helloService.editOne(req, res);
  },
  removeOne: async (req, res) => {
    return await helloService.removeOne(req, res);
  }
}