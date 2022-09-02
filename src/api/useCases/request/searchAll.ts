import {Request,Response} from 'express';
import prisma from '../../services/prisma';

const searchAll = async(req:Request,res:Response) => {
  
  try{

    const list = await prisma.requests.findMany({
    
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

    res.send(list);
    
  }catch(e:any){
    res.send(e.message)
  }
}

export default searchAll;
