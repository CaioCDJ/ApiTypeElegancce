import { Request,Response, NextFunction } from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error'

const createRequest = 
  async(req:Request,res:Response,next:NextFunction) => {

  try{



  }catch(e:any){
    next(Error.badRequest(e.message))
  }


}

