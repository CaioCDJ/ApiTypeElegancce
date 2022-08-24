import genericDbFunc from "../../repositories/genericDbFunc";
import {Request,Response} from 'express';

const findAll = (tbName:string) => async (req:Request,res:Response)  =>{

  try{

    const results = await genericDbFunc.findAll(tbName);

    res.send(results);

  }
  catch(e){

  }
}

export default findAll;
