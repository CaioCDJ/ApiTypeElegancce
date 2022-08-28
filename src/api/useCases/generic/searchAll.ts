import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';

const findAll = (tbName:string) => 
  async (req:Request,res:Response)  =>{

    try{
      const query = `FROM ${tbName}`;

      // ordem cresente
      const all = await prisma[tbName].findMany(
      {
        orderBy:{
          id:'asc'
        }
      });
    
      res.send(all);

    } 
    catch(e:any){
      console.log(e);
      
      res.status(500).send(e.message)
    } 
}
 
export default findAll;
