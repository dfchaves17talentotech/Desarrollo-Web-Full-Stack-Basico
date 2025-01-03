"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = require("express");
const project_controller_1 = require("../controllers/project_controller");
const projectRoutes = (0, express_1.Router)();
exports.projectRoutes = projectRoutes;
projectRoutes.post('/projects', project_controller_1.createProject);
projectRoutes.get('/projects', project_controller_1.getProjects);
projectRoutes.get('/projects/:id', project_controller_1.getProjectById);
projectRoutes.put('/projects', project_controller_1.updateProjects);
projectRoutes.delete('/projects', project_controller_1.deleteProjects);
