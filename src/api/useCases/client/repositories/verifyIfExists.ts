import prisma from "../../../services/prisma";
import { Login } from "../../../entities/loginInterface";

export default async function verifyIfExists(login:Login) {

  const {email,password} = login; 

  const user = await prisma.users.findUnique({

      select:{
        id:true,
        addresses:false,
        birth:false,
        cpf:false,
        email:false,
        name:false,
        password:false,
        img_url:false,
        phone:false
      },
      where:{
        email
      }    
    })

  if(Object.keys(user).length == 0) return false;

  else return true
}
