import { Router } from 'express';
import * as genericFuncs from '../useCases/generic/index'; 
import bodyValidation from '../middlewares/bodyValidationMiddleware';
import {clientSchema} from '../validations/clientSchema';
import * as clientController from '../useCases/client/index';


export default (router:Router):void =>{

  router.get("/", genericFuncs.findAll("users"));
  router.get("/:id", genericFuncs.findById('users'));
  router.delete("/:id", genericFuncs.remove('users'));
  // updates
}
