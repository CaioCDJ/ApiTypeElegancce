import prisma from '../../../services/prisma';
import { Reservation} from '../../../entities/reservation';

export default async function removeReservationPocedure(reservation_id:number) {

  await prisma.reservation_procedures.deleteMany({
    
    where:{
      reservation_id
    }

  })
}

