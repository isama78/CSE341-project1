import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../data/database.js';

export async function getAllContacts(req, res) {
  const database = await connectToDatabase();
  const contacts = await database.collection('contacts').find().toArray();
  res.json(contacts);
}

export async function getContactById(req, res) {
  const database = await connectToDatabase();
  const contact = await database.collection('contacts').findOne({ _id: new ObjectId(req.params.id) });
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: 'Contact not found' });
  }
}
