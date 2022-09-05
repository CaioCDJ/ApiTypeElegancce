import prisma from '../../../services/prisma';

export default async function searchAll(){

  const list = await prisma.reservations.findMany({
      select:{
        id:true,
        date:true,
        _count:false,
        reservation_procedures:{
          select:{
            id:false,
            reservations:false,
            procedures:true,
            procedure_id:false
          }
        },
        users:{
          select:{
            id:true,
            name:true,
            sexo:true,
            email:true,
            cpf:false,
            addresses:false,
            reviews:false,
            phone:false,
            img_url:true,
            birth:false,
            password:false
          }
        },
      }
    });

  return list;
}