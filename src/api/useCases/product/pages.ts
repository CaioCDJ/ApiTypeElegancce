import { NextFunction, Request,Response } from 'express';
import { Error } from '../../entities/error';
import pagesRepo from './repositories/pagesRepo';

const getPages =
   async(req:Request,res:Response,next:NextFunction) => {

  try{

    const numPages:number = parseInt(req.params.num);
    
    let pages:number;
    
    if(numPages == 1)  pages = 0;
   
    else if( numPages > 1) pages = ( numPages - 1 ) + 10;

    else{
      next(Error.badRequest("Erro na Paginação."));
    }  

    const list = await pagesRepo(pages);

    res.send(list);

  }catch(e:any){
    next(Error.badRequest(e.message));
  }
  
}

export default getPages;
