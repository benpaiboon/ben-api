// Init datacontext
const dataContext = require('../DATACONTEXT/database.datacontext');

module.exports = helloModel = {
  getAll: async (modelObj) => {
    return await dataContext.findAll(modelObj.colName);
  },
  getOne: async (modelObj) => {
    return await dataContext.findOne(modelObj.colName, modelObj.query);
  },
  createOne: async (modelObj) => {
    return await dataContext.insertOne(modelObj.colName, modelObj.insertValue);
  },
  editOne: async (modelObj) => {
    return await dataContext.updateOne(modelObj.colName, modelObj.filter, modelObj.updateValue);
  },
  removeOne: async (modelObj) => {
    return await dataContext.deleteOne(modelObj.colName, modelObj.deleteValue);
  }
}