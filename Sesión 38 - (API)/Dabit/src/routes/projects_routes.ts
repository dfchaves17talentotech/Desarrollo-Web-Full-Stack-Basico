import { Router } from "express";
import { createProject, deleteProjects, getProjectById, getProjects, updateProjects } from "../controllers/project_controller";

const projectRoutes = Router();

projectRoutes.post('/projects', createProject);
projectRoutes.get('/projects', getProjects);
projectRoutes.get('/projects/:id', getProjectById)
projectRoutes.put('/projects', updateProjects);
projectRoutes.delete('/projects', deleteProjects);


export {projectRoutes};