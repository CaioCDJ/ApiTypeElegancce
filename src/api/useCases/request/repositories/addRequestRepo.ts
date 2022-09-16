import { RequestInterface } from "../../../entities/Request";
import prisma from "../../../services/prisma";

export default async function addRequestRepo(request:RequestInterface) {

    const { user_id, date, status }:RequestInterface = request;

    await prisma.requests.create({
        data:{
            user_id: user_id,
            date: date,
            status: status
        }
    });

    const id = await prisma.requests.findFirst({
        where:{
            user_id,
            date,
            status
        },
        select:{
            id:true,
            date:false,
            status:false,
            user_id:false
        }
    });

    return id;  
}
