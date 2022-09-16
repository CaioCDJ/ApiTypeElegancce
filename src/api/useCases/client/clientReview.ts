import {Request,Response,NextFunction} from 'express';
 import reviewsRepo from './repositories/reviewsRepo'; 
import { Error } from '../../entities/error';

const clientRequest = 
  async(req:Request,res:Response,next:NextFunction) =>{

  try{

    const user_id = parseInt(req.params.id);

    const list = reviewsRepo(user_id);

    res.send(list);
    
  }catch(e:any){
    next(Error.badRequest(e.message))
  }

}

export default clientRequest;
