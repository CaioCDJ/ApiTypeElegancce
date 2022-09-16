import {Request,Response,NextFunction} from 'express';
import { Error } from '../../entities/error';
import requestsRepo from './repositories/requestsRepo';

const clientRequest = 
  async(req:Request,res:Response,next:NextFunction) =>{

  try{

    const user_id = parseInt(req.params.id);

    const list = await requestsRepo(user_id);

    console.log(list)

    if(Object.keys(list).length == 0 ) next(Error.notFound("Nenhum Resultado encontrado"));
    
    res.send(list);  

  }catch(e:any){
    next(new Error(500,e.message))
  }
}

export default clientRequest;
