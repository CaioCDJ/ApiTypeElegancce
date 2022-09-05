import prisma from '../../../services/prisma';
import { Reservation} from '../../../entities/reservation';

export default async function addReservationRepo(date:Date, user_id:number){

  await prisma.reservations.create(
    {
     data:{
        date,
       user_id
      }
    }
  );

  const reservation_id:number = await prisma.reservations.findUnique(
    {
      select:{
        id:true,
        user_id:false,
        date:false
      },
      where:{
        date,
        user_id
      }
    }
  );

  return reservation_id;
}

