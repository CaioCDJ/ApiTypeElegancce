import { NextFunction, Request, Response } from "express";
import { Error } from "../../entities/error";


const findQuery =
     async(req:Request,res:Response,next:NextFunction)=>{

    try{
        
        

    }catch(e:any){
        next(Error.badRequest(e.message));
    }
}