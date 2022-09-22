import prisma from "../../services/prisma";
import { Error } from "../../entities/error";
import { NextFunction } from "express";

const userLogin =
     async (req:Request,res:Response,next:NextFunction) => {
  try{
  

  }cath(e:any){
    next(Error.badRequest(e.message));
  }
}
