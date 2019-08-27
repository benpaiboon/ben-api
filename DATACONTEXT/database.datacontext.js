const MongoClient = require('mongodb').MongoClient;
const keyConfig = require('../CONFIG/key.config.json');
const connection = MongoClient.connect(keyConfig.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });

const openConnection = async () => {
  const conn = await connection;
  const dbObj = conn.db(keyConfig.db_name);
  return await dbObj;
}

module.exports = {
  findAll: async (colName = "") => {
    const db = await openConnection();
    return await db.collection(colName).find({}).toArray();
  },
  findOne: async (colName = "", query = {}) => {
    const db = await openConnection();
    return await db.collection(colName).find(query).toArray();
  },
  insertOne: async (colName = "", insertValue = {}) => {
    const db = await openConnection();
    return await db.collection(colName).insertOne(insertValue);
  },
  insertMany: async (colName = "", insertValue = []) => {
    const db = await openConnection();
    return await db.collection(colName).insertMany(insertValue);
  },
  updateOne: async (colName = "", filter = {}, updateValue = {}) => {
    const db = await openConnection();
    return await db.collection(colName).updateOne(filter, updateValue);
  },
  updateMany: async (colName = "", filter = {}, updateValue = {}) => {
    const db = await openConnection();
    return await db.collection(colName).updateMany(filter, updateValue);
  },
  deleteOne: async (colName = "", deleteValue = {}) => {
    const db = await openConnection();
    return await db.collection(colName).deleteOne(deleteValue);
  },
  deleteMany: async (colName = "", deleteValue = {}) => {
    const db = await openConnection();
    return await db.collection(colName).deleteMany(deleteValue);
  },
};
