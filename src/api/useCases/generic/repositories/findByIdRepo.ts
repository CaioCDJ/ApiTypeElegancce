import prisma from "../../../services/prisma";

const fincByIdRepo = async(tableName:string,id:number) =>{

    const results = await prisma[tbName].findUniqueOrThrow({
      where:{
        id
      }
    });

    return results;
}

export default fincByIdRepo;