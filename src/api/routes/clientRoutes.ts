import express from 'express';
import { Request,Response } from 'express';
import * as genericFuncs from '../useCases/generic/index'; 
import bodyValidation from '../middlewares/bodyValidationMiddleware';
import {clientSchema} from '../validations/clientSchema';
import * as clientController from '../useCases/client/index';

const clientRoutes = express.Router();


clientRoutes.get("/", genericFuncs.findAll("users"));
clientRoutes.get("/:id", genericFuncs.findById('users'));

// rota test

// update
clientRoutes.delete("/:id", genericFuncs.remove('users'));


export {clientRoutes}
