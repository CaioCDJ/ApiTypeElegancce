import { Request,Response, NextFunction } from 'express';
import { Error } from '../../entities/error';
import prisma from '../../services/prisma';

const searchProduct = 
  async(req:Request,res:Response,next:NextFunction) => {

  try{

    const searchParam = req.params.searchParam;

    const results = await prisma.products.findMany({
      where:{
        name:{

          startsWith:searchParam
        },
        OR:{
          description:{

            contains: searchParam
          },
          OR:{
            name:{

              endsWith:searchParam
            }
          }
        },
      }
    });

    if(results == null){
      next(new Error(404,"Nenhum resultado encontrado"));
    }
    
    res.send(results);

  }catch(e:any){

    next(new Error(500,e.message));
  }
}



