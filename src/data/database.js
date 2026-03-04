import { MongoClient } from 'mongodb';

const dbName = process.env.DB_NAME;
const url = process.env.MONGODB_URL;

const client = new MongoClient(url);

let database;

export const initDb = async () => {
    if (database) return;
    await client.connect();
    database = client.db(dbName);
};

export const getDb = () => {
    if (!database) {
        throw new Error("Base de datos no inicializada");
    }
    return database;
};


