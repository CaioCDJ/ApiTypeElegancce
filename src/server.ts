import express from "express";
import { routes } from "./routes";

const server = express();

server.use(express.json())
server.use(express.urlencoded({extended:false}))

server.use("/",routes)

server.listen(3333,()=>{
    console.log("http://localhost:3333");
});
