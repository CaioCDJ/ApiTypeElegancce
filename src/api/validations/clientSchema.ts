import yup, { date, number, object, SchemaOf, string } from 'yup';
import {Client} from '../entities/client';

export const clientSchema:SchemaOf<Client> = object({
  
  name: string().required(),
  email: string().email().required(),
  password: string().required().min(6),
  cpf: number().required(),
  birth: date().notRequired(),
  phone: number().notRequired().nullable(),
  genero: string().notRequired(),
  img_url: string().url().notRequired().nullable()
});
