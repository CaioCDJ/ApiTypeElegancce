import prisma from '../../../services/prisma';
import { Address } from '../../../entities/address';

export default async function reviewsRepo(data:Address){

  await prisma.addresses.create({data});
}
