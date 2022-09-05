import {Request,Response} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const searchAll = async(req:Request,res:Response) => {
  
  try{

    const paramId = parseInt(req.params.id);
    
    res.send(list);
    
  }catch(e:any){
    res.send(e.message)
  }
}

export default searchAll;
