import prisma from '../../../services/prisma';

export default async function removeFav(id:number){

  async prisma.favorites.delete({
    where:{
      id
    }
  });

}
