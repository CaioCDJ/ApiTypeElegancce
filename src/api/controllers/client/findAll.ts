import ClientRepository from '../../repositories/clientRepository'; 
import {Request,Response} from 'express'; 

const findAll = async (req:Request,res:Response) =>{

  console.log("hahahahh");
  
  try{
  
    const users = await ClientRepository.findAll();

    res.send(users);

  } catch(e){
    res.send(e.message)
  }
}

export default findAll;
