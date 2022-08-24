import express from 'express';
import * as adminController from '../controllers/client/index';
import * as genericFuncs from '../controllers/generic/index'; 

const adminRoutes = express.Router();

adminRoutes.get("/:id",genericFuncs.findById("adms"));
adminRoutes.get("/",genericFuncs.findAll("adms"));
adminRoutes.delete("/",genericFuncs.remove("adms"));

export {adminRoutes};
