import { Request, Response } from "express"
import { dbConnection } from "../db/mongo_connect";
import { ObjectId } from "mongodb";

export const createProject = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;
        const collection = await dbConnection('projects');
        const document = await collection.insertOne(data);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al insertar el documento ${error}`});
    }
};

export const getProjects = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const collection = await dbConnection('projects');
        const filteredDocs = await collection.find(query).toArray();    
        return res.status(200).json(filteredDocs);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar los documentos ${error}`});
    }
};

export const getProjectById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const movieId = req.params.id;
        const collection = await dbConnection('projects');
        const document = await collection.findOne({_id : new ObjectId(movieId)});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al buscar el documento ${error}`});
    }
};

export const updateProjects = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const continentData = req.body;
        const collection = await dbConnection('projects');
        const document = await collection.updateOne(query, { $set: continentData});    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al actualizar el documento ${error}`});
    }
};

export const deleteProjects = async (req: Request, res: Response): Promise<Response> => {
    try {
        const query = req.query;
        const collection = await dbConnection('projects');
        const document = await collection.deleteOne(query);    
        return res.status(200).json(document);
    } catch (error) {
        return res.status(500).json({messge: `Error al eliminar el documento ${error}`});
    }
};