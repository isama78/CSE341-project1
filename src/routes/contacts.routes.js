import express from 'express';
const router = express.Router();

import { getAllContacts, getContactById } from '../controllers/contacts.controller.js';

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getContactById);

export default router;