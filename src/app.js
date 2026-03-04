import 'dotenv/config.js';
import express from 'express';
import contactsRouter from './routes/contacts.routes.js';
import { connectToDatabase } from './data/database.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', contactsRouter);

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

startServer();


