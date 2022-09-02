import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const update = 
  async (req:Request,res:Response,next:NextFunction) =>{

  try{

    const id = parseInt(req.param.id); 

    
  }catch(e:any){
    next(Error.badRequest(e.message))
  }


}

export default update;
