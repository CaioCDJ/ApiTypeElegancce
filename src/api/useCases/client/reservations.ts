import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';

const searchAll = async(req:Request,res:Response) => {
  
  try{

    const list = await prisma.reservations.findMany({
      select:{
        id:true
        users:true,
        date:true,
        user_id:true,
        reservation_procedures:true,
        _count:true
      }
    });
 
    res.send(list);
    
  }catch(e:any){

  }
}

export default searchAll;
