import prisma from '../../../services/prisma';

export default async function pagesRepo(pages:number){

    const list = await prisma.products.findMany(
    {
        take:10,
        skip:pages
      });

  return list;
}
