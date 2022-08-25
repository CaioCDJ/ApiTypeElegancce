import {Request,Response} from 'express'
import prisma from '../../services/prisma';

const remove = (tbName:string) =>
   async (req:Request,res:Response)  =>{

  try{

    const id:number = parseInt(req.params.id);

    await prisma[tbName].delete({
      where:{
        id
      }
    });

    res.send("ok");
  }
  catch(e){
      res.send(e)
  }
}

export default remove;
