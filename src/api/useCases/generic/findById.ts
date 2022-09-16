import {NextFunction, Request,Response} from 'express';
import fincByIdRepo from './repositories/findByIdRepo';
import { Error } from '../../entities/error';

const findById = (tbName:string) => 
  async (req:Request,res:Response,next:NextFunction) =>{

  try{
  
    const id = parseInt(req.params.id);

    const item =  await fincByIdRepo(tbName,id);    

    if(Object.keys(item).length == 0) next(Error.notFound("Item não encontrado"));

    res.send(item);
  }
  catch(e:any){
    
    res.send(e.message)
  }
}

export default findById;
