import prisma from '../../../services/prisma';
import { Address } from '../../../services/prisma';

export default async function reviewsRepo(data:Address){

  await prisma.addresses.create({data});
}
