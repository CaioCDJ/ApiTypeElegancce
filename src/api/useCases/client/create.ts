import { Client } from  '../../entities/client.ts';
import { Request,Response, NextFunction } from 'express';
import { Error } from '../../entities/error';
import addClientRepo from './repositories/addClientRepo';

const create = 
  async (req:Request,res:Response,next:NextFunction) =>{

  try{

    const client:Client = req.body;

    res.json({"message":"Usuario criado"});

  } catch(e:any){
    res.send(Error.badRequeste.message);
  }
}

export default create;
