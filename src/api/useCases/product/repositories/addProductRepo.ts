import prisma from '../../../services/prisma';
import { Product } from '../../../entities/product';

export default async function addProductRepo(data:Product){

  await prisma.products.create({data});

}
