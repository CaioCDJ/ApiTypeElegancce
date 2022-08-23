import genericDbFunc from "../../repositories/genericDbFunc";
import {Request,Response} from 'express';

const remove = (tbName:string) => async (req:Request,res:Response)  =>{

  try{
    const id:number = parseInt(req.params.id);

    const results = await genericDbFunc.remove(id);

    res.send("ok");
  }
  catch(e){}
}

export default remove;
