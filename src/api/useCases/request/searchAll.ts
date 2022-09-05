import { Request,Response, NextFunction } from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error'
import searchAllRepo from './repositories/searchAllRepo';

const searchAll = 
  async(req:Request,res:Response,next:NextFunction) => {
  
  try{

      const list = await searchAllRepo();
    
      if(Object.keys(list).length == 0) next( Error.notFound("Nenhuma reserva encontrada."))

       res.send(list);
    
  }catch(e:any){
    next(Error.badRequest(e.message));
  }
}

export default searchAll;
