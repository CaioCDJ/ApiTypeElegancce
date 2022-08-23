import yup from 'yup';
import {Client} from '../entities/client';

const clientSchema = yup.schema().shape({
  
  email: yup.string().required().email() 
  
} as Record<keyof Client, any>)

export default schema;
