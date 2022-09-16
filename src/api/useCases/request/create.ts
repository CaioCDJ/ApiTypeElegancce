import { Request,Response, NextFunction } from 'express';
import { Error } from '../../entities/error'
import {  RequestInterface} from '../../entities/Request';
import addRequestProductsRepo from './repositories/addRequestProductsRepo';
import addRequestRepo from './repositories/addRequestRepo';

const createRequest = 
  async(req:Request,res:Response,next:NextFunction) => {

  try{

    const data:RequestInterface = req.body;

    await addRequestRepo(data);
    
    await addRequestProductsRepo()

  }catch(e:any){
    next(Error.badRequest(e.message))
  }


}

