import express from 'express';
import { Request,Response } from 'express';
import * as clientUseCases from '../controllers/client/index';
import * as genericFuncs from '../controllers/generic/index'; 
import { Client } from '../entities/client';
import bodyValidation from '../middlewares/bodyValidationMiddleware';
import {schema} from '../validations/clientSchema';

const clientRoutes = express.Router();

clientRoutes.get("/", genericFuncs.findAll('users'));
clientRoutes.get("/:id", genericFuncs.findById('users'));

// rota test
clientRoutes.post('/a',bodyValidation(schema),  async(req:Request,res:Response)=>{



        const user:Client = req.body;
        res.send({msg:"Como assim?",user})
    
});
// update
clientRoutes.delete("/:id", genericFuncs.remove('users'));


export {clientRoutes}
