import { permissionsLevel } from "../api/entities/enum/permisionEmun";
import {sign,verify} from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.SECRET;

export async function gemToken(level:permissionsLevel, userId:number){

    const newToken = await sign({
        _id: userId,
        level
    },SECRET,{
        expiresIn:300
    });

    return newToken;
}

export async function verifyToken(token:any){
   
   const a = await verify(token,SECRET);
  
   console.log(a)
   return a;
}