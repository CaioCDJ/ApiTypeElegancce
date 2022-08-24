import { Request,Response,NextFunction } from 'express';
import { permissionsLevel } from '../entities/enum/permisionEmun';
import { verifyToken } from '../../config/token';
import jwt from 'jsonwebtoken';

const authMiddleware = async (level:permissionsLevel)
    =>(req:Request,res:Response,next:NextFunction){

    const {authorization} = req.headers;

    if(!authorization){
      next(); // futuro error
    }

    const token = authorization?.replace('Bearer',"").trim;

    // -- verify token --
    
    const results = await verifyToken(token);
    
    if(!token){
    }  

}

export default authMiddleware;
