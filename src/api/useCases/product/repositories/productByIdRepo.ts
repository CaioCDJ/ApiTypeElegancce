import prisma from "../../../services/prisma";

export default async function productByIdRepo(id:number){

    const productInfo = await prisma.$queryRaw`
       SELECT COUNT(rp.product_id) AS selled,
            (SELECT AVG(stars) FROM reviews WHERE product_id = ${id}) AS reviews
		        FROM request_products AS rp 
			        JOIN requests AS r ON r.id = rp.request_id
			            JOIN products AS p ON p.id = rp.product_id 
				            WHERE p.qt  > 0 AND r.status  like 'Pago%' AND p.id = ${id};`;

    return productInfo;    
}