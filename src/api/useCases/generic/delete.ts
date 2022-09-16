import {NextFunction, Request,Response} from 'express'
import { Error } from '../../entities/error';
import prisma from '../../services/prisma';
import deleteRepo from './repositories/deleteRepo';

const remove = (tbName:string) =>
   async (req:Request,res:Response,next:NextFunction)  =>{

  try{

    const id:number = parseInt(req.params.id);

    await deleteRepo(tbName,id); 

    res.send("ok");
  }
  catch(e:any){
      next(Error.badRequest(e.message));
  }
}

export default remove;
