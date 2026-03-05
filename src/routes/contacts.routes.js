import express from 'express';
const router = express.Router();

import { getAllContacts, getContactById, createContact, updateContact, deleteContact } from '../controllers/contacts.controller.js';

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getContactById);
router.post('/contacts', createContact);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact);

export default router;