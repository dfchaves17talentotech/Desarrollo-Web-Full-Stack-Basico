import { Router } from "express";
import { createContinent, deleteContinent, getContinents, getContinentsById, updateContinent } from "../controllers/continent_controller";

const continentRoutes = Router();

continentRoutes.post('/continents', createContinent);
continentRoutes.get('/continents', getContinents);
continentRoutes.get('/continents/:id', getContinentsById)
continentRoutes.put('/continents', updateContinent);
continentRoutes.delete('/continents', deleteContinent);


export {continentRoutes};