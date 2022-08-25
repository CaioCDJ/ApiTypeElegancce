import express from 'express';
import { Request,Response } from 'express';
import * as genericFuncs from '../controllers/generic/index'; 
import { Client } from '../entities/client';
import bodyValidation from '../middlewares/bodyValidationMiddleware';
import {clientSchema} from '../validations/clientSchema';

const clientRoutes = express.Router();

clientRoutes.get("/", genericFuncs.findAll('users'));
clientRoutes.get("/:id", genericFuncs.findById('users'));

// rota test
clientRoutes.post('/a',bodyValidation(clientSchema),  async(req:Request,res:Response)=>{



        const user:Client = req.body;
        res.send({msg:"Como assim?",user})
    
});
// update
clientRoutes.delete("/:id", genericFuncs.remove('users'));


export {clientRoutes}
