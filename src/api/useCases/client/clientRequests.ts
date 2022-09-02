import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const clientRequest = 
  async(req:Request,res:Response,next:NextFunction) =>{

  try{

    const user_id = parseInt(req.params.id);

    const results = await prisma.requests.findMany({
      select:{
        id:true,
        date:true,
        request_products:{
          select:{
            id:false,
            qt_product:true,
            products:true
          }
        },
        addresses:{
          select:{
            id:true,
            address:true,
            cep:true,
            district:true,
            city:true,
            complement:true
          }
        }
      },
      where:{ 
        user_id
      }
    });
   
    res.send(results);

  }catch(e:any){
    next(new Error(500,e.message))
  }
}

export default clientRequest;
