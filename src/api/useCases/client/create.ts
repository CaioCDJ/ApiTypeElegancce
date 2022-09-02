import { Client } from  '../../entities/client.ts';
import { Request,Response, NextFunction } from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';

const create = 
  async (req:Request,res:Response,next:NextFunction) =>{

  try{

    const { 
      name,
      email,
      password,
      cpf,
      phone,
      sexo,
      birth,
      img_url 
    } = req.body;

    await prisma.users.create({
      data:{
        name,
        email,
        password,
        cpf,
        sexo,
        phone,
        img_url,
        birth,
      }
    });
    
    res.json({"message":"Usuario criado"});

  } catch(e:any){
    res.send(e.message)
  }
}

export default create;
