import { MongoClient } from 'mongodb';

const dbName = process.env.DB_NAME;
const url = process.env.MONGODB_URL;

let database = null;
const client = new MongoClient(url);

export async function connectToDatabase() {
  if (database) {
    return database;
  }
  await client.connect();
  database = client.db(dbName);
  return database;
}


