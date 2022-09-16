import prisma from '../../../services/prisma';

export default async function favProductRepo(user_id:number){

  const list = await prisma.favorites.findMany({
    where:{
      user_id
    },
    select:{
      products:true
    }
  });

  return list;
}
