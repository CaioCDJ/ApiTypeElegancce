import express from 'express';
import * as adminController from '../useCases/client/index';
import * as genericFuncs from '../useCases/generic/index'; 

const adminRoutes = express.Router();

adminRoutes.get("/:id",genericFuncs.findById("adms"));
adminRoutes.get("/",genericFuncs.findAll("adms"));
adminRoutes.delete("/",genericFuncs.remove("adms"));

export {adminRoutes};
