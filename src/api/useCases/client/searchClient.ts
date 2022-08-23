import genericDbFunc from "../../repositories/genericDbFunc";
import {Request,Response} from 'express';

const byId = async (req:Request,res:Response) => {

    try{

        const id = parseInt(req.params.id);

        const user = await genericDbFunc.findById("users",id);        

        res.send(user);
        
    }catch(e){

        res.status(500).send(e.message);
    }


}


export {byId}
