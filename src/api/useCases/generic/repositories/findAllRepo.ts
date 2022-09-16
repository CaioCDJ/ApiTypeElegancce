import prisma from "../../../services/prisma";

export default async function findAllRepo(tableName:string){

    const list = await prisma[tbName].findMany(
      {
        orderBy:{
          id:'asc'
        }
      });

    return list;
}