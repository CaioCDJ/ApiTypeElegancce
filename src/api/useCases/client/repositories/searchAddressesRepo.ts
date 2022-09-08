import prisma from '../../../services/prisma';

export default async function searchAddressesRepo(user_id:number){

  const list = await prisma.addresses.findMany({
    where:{
      user_id
    }
  });

  return list;
}
