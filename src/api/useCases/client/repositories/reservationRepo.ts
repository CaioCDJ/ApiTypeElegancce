import prisma from '../../../services/prisma';

export default async function reservationRepo(user_id:number){

   const list = await prisma.reservations.findMany({
      select:{
        id:true,
        users:true,
        date:true,
        user_id:true,
        reservation_procedures:true,
        _count:true
      },
      where:{
        user_id
      }
    });

  return list
}
