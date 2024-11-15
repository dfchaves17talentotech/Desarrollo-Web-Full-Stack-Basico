import 'dotenv/config';
import { MongoClient } from 'mongodb';

// Connection URL
const url:string = `${process.env.MONGO_DB_URL}`;
const client = new MongoClient(url);

export const dbConnection = async (collectionName: string) => {
    await client.connect();
    const db = client.db(process.env.MONGO_DB_NAME);
    return db.collection(collectionName);
};