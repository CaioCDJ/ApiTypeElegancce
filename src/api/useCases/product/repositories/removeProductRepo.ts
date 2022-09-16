import prisma from '../../../services/prisma';

export default async function removeProductRepo(id:number){

  await prisma.products.delete({ where: {id} }); 
}
