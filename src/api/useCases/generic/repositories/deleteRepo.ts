import prisma from "../../../services/prisma";

const deleteRepo = async (tableName:string, id:number) => {

    await prisma[tbName].delete({
      where:{
        id
      }
    });
}

export default deleteRepo;