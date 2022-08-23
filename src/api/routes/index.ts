import express from "express";
import { Request,Response } from "express";
import { clientRoutes } from "./clientRoutes";

const routes = express.Router();

routes.use("/client",clientRoutes);

export {routes}
