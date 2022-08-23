import express from 'express';
import * as clientUseCases from '../useCases/client/index';
import * as genericFuncs from '../useCases/generic/index'; 

const clientRoutes = express.Router();

clientRoutes.get("/", genericFuncs.findAll('users'));
clientRoutes.get("/:id", genericFuncs.findById('users'));
// insert
// update
clientRoutes.delete("/:id", genericFuncs.remove('users'));


export {clientRoutes}
