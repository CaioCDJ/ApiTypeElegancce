import { Error } from "../../entities/error";
import { NextFunction,Response,Request } from "express";
import { Login } from '../../entities/login'
import loginAdminRepo from './repositories/loginAdminRepo';

const adminLogin =
     async (req:Request,res:Response,next:NextFunction) => {
  try{
  
    const login:Login = req.body;
  
    // change password to hash

    const adm = await loginAdminRepo(login);
  
    if(Object.keys(adm).length == 0) next(Error.notFound("Usuario não encontrado."));

    // gerar token
    
    res.send(adm);
      
  }cath(e:any){
    next(Error.badRequest(e.message));
  }
}
