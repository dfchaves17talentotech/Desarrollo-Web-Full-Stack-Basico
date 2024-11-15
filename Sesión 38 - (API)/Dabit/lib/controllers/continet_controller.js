"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContinent = exports.updateContinent = exports.getContinentsById = exports.getContinents = exports.createContinent = void 0;
const mongo_connect_1 = require("../db/mongo_connect");
const mongodb_1 = require("mongodb");
const createContinent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const collection = yield (0, mongo_connect_1.dbConnection)('continents');
        const document = yield collection.insertOne(data);
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al insertar el documento ${error}` });
    }
});
exports.createContinent = createContinent;
const getContinents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const collection = yield (0, mongo_connect_1.dbConnection)('continents');
        const filteredDocs = yield collection.find(query).toArray();
        return res.status(200).json(filteredDocs);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al buscar los documentos ${error}` });
    }
});
exports.getContinents = getContinents;
const getContinentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.id;
        const collection = yield (0, mongo_connect_1.dbConnection)('continents');
        const document = yield collection.findOne({ _id: new mongodb_1.ObjectId(movieId) });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al buscar el documento ${error}` });
    }
});
exports.getContinentsById = getContinentsById;
const updateContinent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const continentData = req.body;
        const collection = yield (0, mongo_connect_1.dbConnection)('continents');
        const document = yield collection.updateOne(query, { $set: continentData });
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al actualizar el documento ${error}` });
    }
});
exports.updateContinent = updateContinent;
const deleteContinent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const collection = yield (0, mongo_connect_1.dbConnection)('continents');
        const document = yield collection.deleteOne(query);
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al eliminar el documento ${error}` });
    }
});
exports.deleteContinent = deleteContinent;
