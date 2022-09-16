import prisma from "../../../services/prisma";

const findByCodeRepo = async(code:string) => {

    const results = await prisma.discounts.findUnique({
      where: {
        code
      }
    });
    
    return results;

}
export default findByCodeRepo;