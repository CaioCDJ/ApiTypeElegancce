import { Router } from 'express';
import { searchProduct,getPages } from '../useCases/product/index';
import * as genericFuncs from '../useCases/generic/index';
import { create } from '../useCases/client/index';
import bodyValidationMiddleware from '../middlewares/bodyValidationMiddleware.ts';
import clientSchema from '../validations/clientSchema'; 

const publicRoutes = Router();

publicRoutes.get("/products/pages/:num",getPages);
publicRoutes.get("/products/:id",genericFuncs.findById("products"));
publicRoutes.get("/discount/:code",);
publicRoutes.get("/products/search/:searchParam",searchProduct);
publicRoutes.get("/register",create);

export default publicRoutes;
