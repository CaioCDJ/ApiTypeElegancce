import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const searchAll = 
  async(req:Request,res:Response,next:NextFunction) => {
  
  try{

    const user_id = parseInt(req.params.id);
    
    const list = await prisma.reservations.findMany({
      select:{
        id:true,
        users:true,
        date:true,
        user_id:true,
        reservation_procedures:true,
        _count:true
      },
      where:{
        user_id
      }
    });
 
    res.send(list);
    
  }catch(e:any){
    next(new Error(500,e.message))
  }
}

export default searchAll;
