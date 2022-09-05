import {Request,Response,NextFunction} from 'express';
import { Error } from '../../entities/error';
import removeReservationRepo from './repositories/removeReservationRepo';
import removeReservationProceduresRepo from './repositories/removeResevationProceduresRepo';

const removeReservation = 
  async(req:Request,res:Response,next:NextFunction) =>{

    try{

      const id = parseInt(req.params.id);

      await removeReservationProceduresRepo(id);
      await removeReservation(id);

      res.send("Excluido com sucesso");

    }catch(e:any){
      next(Error.badRequest(e.message))
    }

} 

export default removeReservation;
