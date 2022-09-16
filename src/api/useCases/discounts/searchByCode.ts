import {Request,Response,NextFunction} from 'express';
import { Error } from '../../entities/error';
import findByCodeRepo from './repositories/findByIdRepo';

const searchByCode = 
  async(req:Request,res:Response,next:NextFunction)=>{

  try{

    const code:string = req.params.code;
  
    const results  = findByCodeRepo(code);
    
    if(Object.keys(results).length == 0) next(Error.notFound("Cupon não encontrado"))
   
    res.send(results);
 
  }catch(e:any){
    next(Error.badRequest(e.message));
  }
}

export default searchByCode;
