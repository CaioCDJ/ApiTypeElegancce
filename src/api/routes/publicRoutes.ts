import { Router } from 'express';
import { searchProduct,getPages } from '../useCases/product/index';
import * as genericFuncs from '../useCases/generic/index';
import {findById} from '../useCases/product/index';
import { create } from '../useCases/client/index';

const publicRoutes = Router();

publicRoutes.get("/products/pages/:num",getPages);
publicRoutes.get("/products/:id",);
publicRoutes.get("/discount/:code",findById);
publicRoutes.get("/products/search/:searchParam",searchProduct);
publicRoutes.get("/register",create);

export default publicRoutes;
