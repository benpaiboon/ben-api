// Init datacontext
const dataContext = require('../DATACONTEXT/database.datacontext');

module.exports = helloModel = {
  getAll: async (modelObj) => {
    return await dataContext.findAll(modelObj.colName);
  },
  getOne: async (modelObj) => {
    return await dataContext.findOne(modelObj.colName, modelObj.query);
  }
}