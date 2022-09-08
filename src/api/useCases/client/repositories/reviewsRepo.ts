import prisma from '../../services/prisma';

export default async function reviewsRepo(user_id){

    const reviews = await prisma.reviews.findMany({
      where:{
        user_id
      }
    });

  return reviews;
}
