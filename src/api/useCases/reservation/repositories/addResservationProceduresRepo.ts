import prisma from '../../../services/prisma';
import { Reservation} from '../../../entities/reservation';

export default async function addReservationProceduresRepo(reservation_id:number,procedures:Array<number>){

    let data:Array<reservationPrcedures>;

    procedures.forEach(procedure=>{
      
      data.push({procedure,reservation_id})
    });
    
    await prisma.reservation_procedures.createMany({data});
    
}

interface reservationPrcedures{
  procedure:number,
    reservation_id:number
}

