import yup from 'yup';
import {Response,Request,NextFunction} from 'express';

const bodyValidation = (schema:yup.AnyObjectSchema) =>
  async (req:Request,res:Response,next:NextFunction) =>{

  try{

    const body = req.body;

    await schema.validate(body);

    next();

  } catch(e:any){
    res.send(e.message);
  }

}

export default bodyValidation;