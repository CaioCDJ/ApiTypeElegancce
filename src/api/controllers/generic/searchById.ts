import {Request,Response} from 'express';

const findById = (tbName:string) => async (req:Request,res:Response) =>{

  try{
  
    const id:number = parseInt(req.params.id);
  
    res.send(results);
  }
  catch(e){
    
    res.send(e.message)
  }
}

export default findById;
