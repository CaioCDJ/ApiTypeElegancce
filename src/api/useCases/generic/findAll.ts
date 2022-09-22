import { Request,Response,NextFunction } from 'express';
import { Error } from '../../entities/error';
import findAllRepo from './repositories/findAllRepo';

const findAll = (tbName:string) => 
  async (req:Request,res:Response,next:NextFunction)  =>{

    try{
    
      const all = await findAllRepo(tbName); 
     
      if(Object.keys(all).length == 0) next(Error.notFound("Itens não foram encontrados"));

      res.send(all);

    } 
    catch(e:any){
      next(Error.badRequest(e.message));      
    } 
}
 
export default findAll;
