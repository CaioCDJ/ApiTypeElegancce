import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const searchByCode = 
  async(req:Request,res:Response,next:NextFunction){

  try{

    const code:string = req.params.code;
  
    const results = await prisma.discounts.findUnique({
      where: {
        code
      }
    });
   
    res.send(results);
 
  }catch(e:any){
    next(Error.badRequest(e.message));
  }
}

export default searchByCode;
