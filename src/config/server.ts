import express from "express";
import { routes } from "../api/routes/index";

const server = express();

server.use(express.json())
server.use(express.urlencoded({extended:false}))

server.use("/api",routes)

export default server;
