import yup from 'yup';
import {Response,Request,NextFunction} from 'express';

const bodyValidation = (schema:yup.AnyObjectSchema) =>
  async (req:Request,res:Response,next:NextFunction) =>{

  try{

    const body = req.body;

    console.log(body)

    await schema.validate(body);

    next();

  } catch(e){
    res.send(e.message);
  }

}

export default bodyValidation;