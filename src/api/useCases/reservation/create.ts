import {Request,Response,NextFunction} from 'express';
import prisma from '../../services/prisma';
import { Error } from '../../entities/error';
import { Reservation} from '../../entities/reservation';
import addReservationProcedures from './repositories/addResservationProceduresRepo'; 
import addReservationRepo from './repositories/addReservationRepo'

const create = 
    async (req:Request,res:Response,next:NextFunction) =>{

    try{

      const body:Reservation = req.body;  
      
      const reservation:number = await addReservationRepo(body.date,body.user_id);

      await addReservationProcedures(reservation,body.procedures);
      
      res.send();
     
    }catch(e:any){
      next(Error.badRequest(e.message));
    }
} 



