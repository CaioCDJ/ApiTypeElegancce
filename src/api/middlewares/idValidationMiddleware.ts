import yup from 'yup';
import idSchema from '../validations/idValidation.ts';
import {Response,Request,NextFunction} from 'express';

const idValidation = 
  async (req:Request,res:Response,next:NextFunction) =>{

  try{
    
    const id = parseInt(req.params.id);

    await  idSchema.validate(id);

    next();

  }catch(e){

  }
}

export default idValidation;
