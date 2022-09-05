import { Request,Response, NextFunction } from 'express';
import { Error } from '../../entities/error';
import searchByIdReepo from './repositories/searchByIdRepo';

const searchById = 
  async(req:Request,res:Response,next:NextFunction) => {
  
  try{

    const idParam = parseInt(req.params,id);
  
    const list = await searchById(idParam);

    if(Object.keys(list).length == 0) next( Error.notFound("Nenhuma reserva encontrada."))
    

    res.send(list);
    
  }catch(e:any){
    next(Error.badRequest(e.message))
  }
}

export default searchById;
