import { Discount } from "../../../entities/discounts";
import prisma from "../../../services/prisma";

 
const createRepo = async (data:Discount) => {

    await prisma.discounts.create({data});    
} 

export default createRepo;