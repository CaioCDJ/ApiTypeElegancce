import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';

const searchAll = async(req:Request,res:Response) => {
  
  try{

    const list = await prisma.reservations.findMany({
      select:{
        id:true,
        date:true,
        _count:false,
        reservation_procedures:{
          select:{
            id:false,
            reservations:false,
            procedures:true,
            procedure_id:false
          }
        },
        users:{
          select:{
            id:true,
            name:true,
            sexo:true,
            email:true,
            cpf:false,
            addresses:false,
            reviews:false,
            phone:false,
            img_url:true,
            birth:false,
            password:false
          }
        },
      }
    });

    res.send(list);
    
  }catch(e:any){
    res.send(e.message)
  }
}

export default searchAll;
