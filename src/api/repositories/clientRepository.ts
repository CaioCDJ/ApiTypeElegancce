import { Client } from '../entities/client';
import prisma from '../services/prisma';

export default class ClientRepository{

  public static async findAll(){

    const users = await prisma.users.findMany({
      select:{
        name:true,
        email:true,
        phone:true,
        birth:true,
        cpf:true,
        sexo:true,
        password:false
      }
    });
    
    return users;
  }

  public static async add(client:Client){

    
  }
}
