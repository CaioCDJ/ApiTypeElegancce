import { string,object,SchemaOf, number } from "yup";
import { Product } from "../entities/product";

export const productSchema:SchemaOf<Product> = object({

    name:string().required(),
    value:number().required().positive(),
    description:string().required(),
    qt:number().required().positive().integer(),
    brand: string().required()   
});