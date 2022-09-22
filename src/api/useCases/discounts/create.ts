import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';


const create =  
  async(req:Request,res:Response,next:NextFunction) => {

  try{

    const { code,discount, dt_limit,created_at } = req.body;  
    
    await prisma.discounts.create({
      data:{
        code,
        created_at,
        discount,
        dt_limit
      }
    });
    
    res.send("Cupon de Desconto criado");
  
  }catch(e:any){ next(Error.badRequest(e.message)) }

} 

export default create;
