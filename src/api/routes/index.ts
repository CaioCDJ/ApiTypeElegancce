import express from "express";
import { Request,Response } from "express";
import { clientRoutes } from "./clientRoutes";
import { adminRoutes } from './adminsRoutes';
import apiErrorHandler from './errorHandler';
import { gemToken, verifyToken } from "../../config/token";
import { permissionsLevel } from "../entities/enum/permisionEmun";

const routes = express.Router();

routes.use("/client",clientRoutes);
routes.use("/admins",adminRoutes);

// --- rota test --
routes.get('/token',async(req:Request,res:Response)=>{

    const ola = await gemToken(permissionsLevel.client,1);
   
    const a = await verifyToken(ola);
    
    res.send(ola);
})

routes.use(apiErrorHandler);

export {routes}
