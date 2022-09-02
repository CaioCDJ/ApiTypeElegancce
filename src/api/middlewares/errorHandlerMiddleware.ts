
import { Response, Request, NextFunction } from 'express';
import { Error } from '../entities/error';

const errorHandlerMiddleware = 
  (err:Error,req:Request,res:Response,next:NextFunction) => {

    if(err){
      return res.status(err.code).json(err.message);
    }

    return res.status(500).json("Erro interno");
  };


export default errorHandlerMiddleware;
