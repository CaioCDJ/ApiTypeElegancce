import express from "express";
import { Request,Response } from "express";
import { clientRoutes } from "./clientRoutes";

const routes = express.Router();

routes.get("/ola",(req:Request,res:Response,next)=>{
    
    res.json({"nome":"Pedro"})
})
routes.use(clientRoutes);

export {routes}