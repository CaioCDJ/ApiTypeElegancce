import {Request,Response,NextFunction} from 'express';
 import reviewsRepo from './repositories/reviewsRepo'; 
import { Error } from '../../entities/error';

const clientRequest = 
  async(req:Request,res:Response,next:NextFunction) =>{

  try{

    const user_id = parseInt(req.params.id);
    
    res.send(reviews);
    
  }catch(e){
    next(new Error(500,e.message))
  }

}

export default clientRequest;
