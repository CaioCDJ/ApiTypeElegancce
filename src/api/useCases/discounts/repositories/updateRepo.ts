import prisma from '../../../services/prisma';
import { Discount } from '../../../entities/discounts';

const updateRepo = async (id:number,data:Discount) =>{

  await prisma.discounts.update(
    {
      data,
      where:{
        id
      }
    });
}
