import prisma from '../../../services/prisma';

export default async function searchProductRepo(searchParam:string){

 const list = await prisma.products.findMany({
      where:{
        name:{
          startsWith:searchParam
        },
        OR:{
          description:{

            contains: searchParam
          },
          OR:{
            name:{

              endsWith:searchParam
            }
          }
        },
      }
    });

  return list;
}
