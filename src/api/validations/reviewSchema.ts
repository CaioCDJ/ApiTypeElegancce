import yup, { number, object, SchemaOf, string } from 'yup';
import {Review} from '../entities/review';

export const reviewSchema:SchemaOf<Review> = object({

    user_id:number().required().positive().integer(),
    product_id:number().required().positive().integer(),
    stars:number().required().positive().integer()

})