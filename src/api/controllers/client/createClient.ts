import { Client } from "../../entities/client";
import {Request,Response } from "express";

export class newClient{
    
    constructor(private user:Client){}

    static async handle(req:Request,res:Response){
        
        res.send("ola.");
    }
}
