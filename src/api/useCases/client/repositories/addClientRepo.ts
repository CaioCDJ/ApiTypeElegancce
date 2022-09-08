import prisma from '../../services/prisma';
import { Client } from  '../../entities/client.ts';

export default async function addClientRepo(data:Client){

 await prisma.users.create({
      data
 });
    
}
