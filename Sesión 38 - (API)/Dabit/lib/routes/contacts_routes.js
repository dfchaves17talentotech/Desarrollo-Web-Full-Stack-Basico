"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = require("express");
const continent_controller_copy_1 = require("../controllers/continent_controller copy");
const contactRoutes = (0, express_1.Router)();
exports.contactRoutes = contactRoutes;
contactRoutes.post('/contacts', continent_controller_copy_1.createContact);
contactRoutes.get('/contacts', continent_controller_copy_1.getContacts);
