import { Request,Response,NextFunction } from 'express';
import { permissionsLevel } from '../entities/enum/permisionEmun';
import { verifyToken } from '../../config/token';
import { Error } from '../entities/error';

const authMiddleware = async(level:permissionsLevel)
    => (req:Request,res:Response,next:NextFunction)=>{

    const {authorization} = req.headers;

    if(!authorization){
      next(Error.notAcceptable("Token não autorizado.")); // futuro error
    }

    // talvez
    const token = authorization?.replace('Bearer',"").trim;

    // -- verify token --
    
    const results = await verifyToken(token);
    
    if(!token){
    }  

}

export default authMiddleware;
