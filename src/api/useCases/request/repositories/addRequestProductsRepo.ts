import prisma from '../../../services/prisma';
import { Products } from '../../../entities/Request';

export default 
  async function addRequestProductsRepo(request_id:number, request_products:Array<Products>){
 

  let data:Array<request_products>;
  
  request_products.forEach(rp=>{
    data.push(
      {
        request_id,
        qt_product:rp.qt,
        product_id:rp.id
      })
  });
  
  await prisma.request_products.createMany({data});
}

interface request_products{
  qt_product:number,
  product_id:number,
  request_id:number
}
