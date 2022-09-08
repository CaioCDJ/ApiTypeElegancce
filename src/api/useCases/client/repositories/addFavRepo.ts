import prisma from '../../../services/prisma';
import { Favorite } from '../../../entities/favorite';

export default async function addFavRepo(data:Favorite){

  async prisma.favorites.create({data});

}
