import {Request,Response} from 'express';
import prisma from '../../services/prisma';

const findById = (tbName:string) => 
  async (req:Request,res:Response) =>{

  try{
  
    const id = parseInt(req.params.id);

    const results = await prisma[tbName].findUnique({
      where:{
        id
      }
    });

    res.send(results);
  }
  catch(e){
    
    res.send(e.message)
  }
}

export default findById;
