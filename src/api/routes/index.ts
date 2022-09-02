import { Router } from "express";
import { gemToken, verifyToken } from "../../config/token";
import { permissionsLevel } from "../entities/enum/permisionEmun";
import clientRouter from  './clientRoutes'; 
import privateRotutes from './privateRoutes';
import publicRoutes from './publicRoutes';

const routes = Router();

routes.use("/public",publicRoutes);
routes.use("/client",clientRouter);
routes.use("/private",privateRotutes)

export {routes}

