"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const continent_routes_1 = require("./routes/continent_routes");
const projects_routes_1 = require("./routes/projects_routes");
const contacts_routes_1 = require("./routes/contacts_routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', continent_routes_1.continentRoutes);
app.use('/api', projects_routes_1.projectRoutes);
app.use('/api', contacts_routes_1.contactRoutes);
app.listen(port, () => {
    console.log(`Estoy corriendo en el puerto ${port}`);
});
