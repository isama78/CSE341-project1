import { ObjectId } from "mongodb";
import { getDb } from "../data/database.js";

export async function getAllContacts(req, res) {
  // #swagger.tags = ['Contacts']
  const database = await getDb();
  const contacts = await database.collection("contacts").find().toArray();
  res.json(contacts);
}

export async function getContactById(req, res) {
  // #swagger.tags = ['Contacts']
  const database = await getDb();
  const contact = await database
    .collection("contacts")
    .findOne({ _id: new ObjectId(req.params.id) });
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).json({ message: "Contact not found" });
  }
}

export async function createContact(req, res) {
  // #swagger.tags = ['Contacts']
  const database = await getDb();
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const result = await database
    .collection("contacts")
    .insertOne({ firstName, lastName, email, favoriteColor, birthday });
  res.status(201).json({ message: "Contact created", id: result.insertedId });
}

export async function updateContact(req, res) {
  // #swagger.tags = ['Contacts']
  const database = await getDb();
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const result = await database
    .collection("contacts")
    .updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { firstName, lastName, email, favoriteColor, birthday } }
    );
  if (result.matchedCount === 1) {
    res.json({ message: "Contact updated" });
  } else {
    res.status(404).json({ message: "Contact not found" });
  }
}

export async function deleteContact(req, res) {
  // #swagger.tags = ['Contacts']
  const database = await getDb();
  const result = await database
    .collection("contacts")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  if (result.deletedCount === 1) {
    res.json({ message: "Contact deleted" });
  } else {
    res.status(404).json({ message: "Contact not found" });
  }
}
