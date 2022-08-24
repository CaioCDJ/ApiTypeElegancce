import { Error } from '../entities/error';
import {Request,Response,NextFunction} from 'express';

const apiErrorHandler = 
    (err:Error,req:Request,res:Response,next:NextFunction) => {

  if(err instanceof Error){

    return res.status(err.code).json(err.message);
  }

  return res.status(500).json('erro interno');
}

export default apiErrorHandler;
