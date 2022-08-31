import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';

const searchById = async(req:Request,res:Response) => {
  
  try{

    const idParam = parseInt(req.params,id);

    const list = await prisma.reservations.findMany({
      
      where:{
        id:idParam
      },
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

export default searchById;
