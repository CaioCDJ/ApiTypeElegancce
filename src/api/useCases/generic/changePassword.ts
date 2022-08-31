import {Request,Response} from 'express';
import { Prisma } from '@prisma/client';
import prisma from '../../services/prisma';

const changePassword = (tbName:string) => 
  async(req:Request,res:Response) => {

  try{
    
    const { newPassword, password } = req.body;


    res.send("ok");

  }catch(e:any){

  }
} 
