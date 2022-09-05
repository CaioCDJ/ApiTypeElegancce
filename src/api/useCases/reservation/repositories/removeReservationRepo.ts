import prisma from '../../../services/prisma';

export default async function removeResevationRepo(id:number) {

  await prisma.reservations.delete({
    where:{
    id
    }
  }) 

}

