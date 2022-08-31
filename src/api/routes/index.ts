import express from "express";
import { Request,Response } from "express";
import { clientRoutes } from "./clientRoutes";
import productRoutes from './producRoutes';
import apiErrorHandler from './errorHandler';
import reservation from './reserationRoutes'; 
import { gemToken, verifyToken } from "../../config/token";
import { permissionsLevel } from "../entities/enum/permisionEmun";
import { PrismaClient } from "@prisma/client";

BigInt.prototype.toJSON = function() {       
    return this.toString()
}

const routes = express.Router();

routes.use("/products",productRoutes)
routes.use("/reservations",reservation);

// --- rota test --
routes.get('/token',async(req:Request,res:Response)=>{

    const ola = await gemToken(permissionsLevel.client,1);
   
    const a = await verifyToken(ola);
    
    res.send(ola);
})

routes.use(apiErrorHandler);

export {routes}
