import express from 'express';
import { Request,Response } from 'express';
import * as productUseCases   from '../useCases/product/index.ts';
import * as genericFuncs from '../useCases/generic/index';

const productRoutes = express.Router();

productRoutes.get("/", genericFuncs.findAll("products"));
productRoutes.get("/:id", genericFuncs.findById("products"));
productRoutes.get("/pages/:num",productUseCases.getPages);


export default productRoutes;
