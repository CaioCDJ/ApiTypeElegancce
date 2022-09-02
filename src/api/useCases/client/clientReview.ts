import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const clientRequest = 
  async(req:Request,res:Response,next:NextFunction) =>{

  try{

    const user_id = parseInt(req.params.id);
    
    const reviews = await prisma.reviews.findMany({
      where:{
        user_id
      }
    });

    res.send(reviews);
    
  }catch(e){
    next(new Error(500,e.message))
  }

}

export default clientRequest;
