const MongoClient = require('mongodb').MongoClient;
const keyConfig = require('../configs/key.config.json');
const connection = MongoClient.connect(keyConfig.mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true });

const openConnection = async () => {
  const conn = await connection;
  const dbObj = conn.db(keyConfig.db_name);
  return await dbObj;
}

// Data Context
module.exports = ContextDataService = {
  findAll: async (collectionName) => {
    const db = await openConnection();
    return await db.collection(collectionName).find({}).toArray();
  },
  findOne: async (collectionName, filter) => {
    const db = await openConnection();
    return await db.collection(collectionName).find(filter).toArray();
  },
  insertOne: async (collectionName, insertObject) => {
    const db = await openConnection();
    return await db.collection(collectionName).insertOne(insertObject);
  },
  insertMany: async (collectionName, insertObject) => {
    const db = await openConnection();
    return await db.collection(collectionName).insertMany(insertObject);
  },
  updateOne: async (collectionName, filter, updateObject) => {
    const db = await openConnection();
    return await db.collection(collectionName).updateOne(filter, updateObject);
  },
  updateMany: async (collectionName, filter, updateObject) => {
    const db = await openConnection();
    return await db.collection(collectionName).updateMany(filter, updateObject);
  },
  deleteOne: async (collectionName, deleteObject) => {
    const db = await openConnection();
    return await db.collection(collectionName).deleteOne(deleteObject);
  },
  deleteMany: async (collectionName, deleteObject) => {
    const db = await openConnection();
    return await db.collection(collectionName).deleteMany(deleteObject);
  },
  aggregate: async (collectionName, aggregateCondition) => {
    const db = await openConnection();
    return await db.collection(collectionName).aggregate(aggregateCondition).toArray();
  }
};
