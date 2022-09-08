import prisma from '../../../services/prisma';

export default async function getRequestValueRepo(request_id:number){

  const list = await prisma.requests.findMany({

    select:{
      id:false,
      address_id:false,
      user_id:false,
      date:false,
      status:false,
      request_products:{
        select:{
          id:false,
          qt_product:true,
          products:{
            select:{
              id:false,
              brand:false,
              description:false,
              name:false,
              qt:false,
              url_img:false,
              value:true
            }
          }
        }
      }
    },
    where:{
      id:request_id
    }
  });

  return list;
}
