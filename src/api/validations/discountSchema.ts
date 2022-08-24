import {SchemaOf,string,number, object, date} from 'yup';
import { Discount } from '../entities/discounts';

export const discountSchema:SchemaOf<Discount> = 
    object({
        discount:number().required().positive(),
        dt_limit:date().required(),
        code:string().required(),
        created_at:date().default(()=> new Date)
})