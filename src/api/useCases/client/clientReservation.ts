import {Request,Response,NextFunction} from 'express';
import { Error } from '../../entities/error';
import reservationRepo from './repositories/reservationRepo';

const searchAll = 
  async(req:Request,res:Response,next:NextFunction) => {
  
  try{

    const user_id = parseInt(req.params.id);
   
    const list = await reservationRepo(user_id);

    if(Object.key(list).length == 0 ) next(Error.notFound("Nenhum Resultado encontrado"));
 
    res.send(list);
    
  }catch(e:any){
    next(new Error(500,e.message))
  }
}

export default searchAll;
