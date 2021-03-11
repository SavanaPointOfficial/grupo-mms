import { Router } from 'express';
import { createContact } from './controllers/contact.service.js';



export const router = Router()

router.post('/new-contact', createContact)