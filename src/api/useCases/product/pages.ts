import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';

const getPages = async(req:Request,res:Response) => {

  try{

    const numPages:number = parseInt(req.params.num);
    
    let pages:number;
    
    if(numPages == 1)  pages = 0;
   
    else if( numPages > 1) pages = ( numPages - 1 ) + 10;

    else{
     res.send("error")
    }

    const list = await prisma.products.findMany(
    {
        take:10,
        skip:pages
      });

    res.send(list);

  }catch(e:any){
    res.send(e.message);
  }
  
}

export default getPages;
