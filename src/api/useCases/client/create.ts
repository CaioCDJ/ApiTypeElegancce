import {Client} from  '../../entities/client.ts';
import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';



const create = async (req,res) =>{

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
    
    res.send();

  } catch(e:any){
    res.send(e.message)
  }
}

export default create;
