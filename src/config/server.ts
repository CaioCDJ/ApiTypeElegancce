import express from "express";
import { routes } from "../api/routes/index";
import errorHandlerMiddleware from '../api/middlewares/errorHandlerMiddleware';
const server = express();

server.use(express.json())
server.use(express.urlencoded({extended:false}))

server.use("/api",routes)

server.use(errorHandlerMiddleware);

export default server;
