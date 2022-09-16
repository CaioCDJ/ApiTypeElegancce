import prisma from "../../../services/prisma";

export default async function removeFavRepo(id:number){

    await prisma.favorites.delete({
        where:{
            id
        }
    })

}