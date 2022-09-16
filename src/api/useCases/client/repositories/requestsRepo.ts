import prisma from '../../../services/prisma';


export default async function requestsRepo(user_id:number){

    const results = await prisma.requests.findMany({
      select:{
        id:true,
        date:true,
        request_products:{
          select:{
            id:false,
            qt_product:true,
            products:true
          }
        },
        addresses:{
          select:{
            id:true,
            address:true,
            cep:true,
            district:true,
            city:true,
            complement:true
          }
        }
      },
      where:{ 
        user_id
      }
    });
return results;
}
