import { Request,Response, NextFunction } from 'express';
import { Error } from '../../entities/error';
import { searchProductRepo } from './repositories/searchProductRepo';

const searchProduct = 
  async(req:Request,res:Response,next:NextFunction) => {

  try{

    const searchParam = req.params.searchParam;

    const list  = searchProductRepo(searchParam);

    if(list == null){
      next(new Error(404,"Nenhum resultado encontrado"));
    }
    
    res.send(list);

  }catch(e:any){

    next(new Error(500,e.message));
  }
}



