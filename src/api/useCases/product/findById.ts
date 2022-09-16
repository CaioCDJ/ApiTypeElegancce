import { NextFunction, Request, Response } from "express";
import { Error } from "../../entities/error";
import productByIdRepo from "./repositories/productByIdRepo";

const findById = 
    async (req:Request,res:Response,next:NextFunction) => {

    try {
       
        const id = parseInt(req.params.id);

        const product:any = productByIdRepo(id);

        if(Object.keys(product).length == 0 ) next(Error.notFound("Nenhum Resultado encontrado"));

        res.send(product);

    } catch (e:any) {
        next(Error.badRequest(e.message));
    }
}

export default findById;