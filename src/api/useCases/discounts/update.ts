import { Request,Response,NextFunction } from 'express';
import { Error } from '../../entities/error';
import { Discount } from '../../../entities/discounts';
import { updateRepo } from './repositories/updateRepo';

const update = 
  async (req:Request,res:Response,next:NextFunction) => {

  try{

    const id = parseInt(req.param.id); 

    const data:Discount = req.body;

    await updateRepo(id,data);

    res.send("Desconto atualizado");

  }catch(e:any){
    next(Error.badRequest(e.message))
  }
}

export default update;
