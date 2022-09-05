import prisma from '../../../services/prisma';

export default async function searchByIdRepo(id:number){

 const list = await prisma.requests.findMany({
      where:{
        id
      }, 
      select:{
        id:true,
        date:true,
        status:true,
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
          },
        },
        request_products:{
          select:{
            qt_product:true,
            products:{
              select:{
                id:true,
                name:true,
                value:true,
              }
            }
          }
        }, 
        addresses:{
          select:{
            id:true,
            address:true,
            cep:true,
            city:false,
            district:false,
            complement:true,
          }},
      }
    });

  return list; 

}

