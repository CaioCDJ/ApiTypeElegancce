import yup, { object, SchemaOf, string } from 'yup';
import { Admin } from '../entities/admin';

export const adminSchema:SchemaOf<Admin> = object({
    name:string().required(),
    email:string().required(),
    password: string().required()
})