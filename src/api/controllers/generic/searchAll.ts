import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';

const findAll = (tbName:string) => 
  async (req:Request,res:Response)  =>{

    try{
  
      const query = `FROM ${tbName}`;

      const all = await prisma.$queryRawUnsafe(`SELECT * ${query} ORDER BY id`);
     
      res.send(all);

    } 
    catch(e){
      res.status(500).send(e.message)
    } 
}
 
export default findAll;
