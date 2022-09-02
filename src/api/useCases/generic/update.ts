import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const update = (tbName:string,Interface:interface) => 
  async(req:Request,res:Response,next:NextFunction) =>{

  try{
    
    const id = parseInt(req.params.id);
    const data = req.body;
    
    await prisma[tbName].update({
    where:{
      id 
    },
    data
   });
  
    res.send();

  }catch(e:any){
    next(Error.badRequest(e.message));
  }
} 
