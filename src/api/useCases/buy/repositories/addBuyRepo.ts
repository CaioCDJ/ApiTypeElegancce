import prisma from '../../../services/prisma';
import { Buy } from '../../../entities/buy';

export default async function addBuyRepo(data:Buy){

  await prisma.buys.create({data});

  // updating request status
  await prisma.requests.update({
    data:{
      status:"Pago"
    },
    where:{
      id:data.request_id
    }
  })
}
