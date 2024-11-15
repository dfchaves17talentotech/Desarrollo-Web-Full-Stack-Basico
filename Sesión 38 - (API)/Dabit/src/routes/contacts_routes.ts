import { Router } from "express";
import { createContact, getContacts } from "../controllers/contact_controller";

const contactRoutes = Router();

contactRoutes.post('/contacts', createContact);
contactRoutes.get('/contacts', getContacts);


export {contactRoutes};