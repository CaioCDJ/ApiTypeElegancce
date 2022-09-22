import prisma from "../../../services/prisma";
import { Login } from '../../../entities/login';

const loginAdminRepo = async (data:Login) =>{

  const { email, password } = data;

  const logs = await prisma.adms.findUnique({
    where:{
      email,
      password
    } 
  })

  return logs;
}

export default loginAdminRepo;
