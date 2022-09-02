import { Router } from 'express';

// -- useCases --
import * as genericFuncs from '../useCases/generic/index';
import * as reservationUseCases from '../useCases/reservation/index';
import * as requestUseCases from '../useCases/request/index';

const privateRotutes = Router();

// adm 
privateRotutes.get("/adm",genericFuncs.findAll("adms"));
privateRotutes.get("/adm/:id",genericFuncs.findById("adms"));
privateRotutes.delete("/adm/:id",genericFuncs.remove("adms"))

// products create update and delete 

privateRotutes.delete("/products/:id",genericFuncs.remove("products"))

// discount create update and delete 
privateRotutes.get("/discount",genericFuncs.findAll("discounts"));
privateRotutes.get("/discount/:id",genericFuncs.findById("discounts"));
privateRotutes.delete("/discount/:id",genericFuncs.remove("discounts"))

// sells info


// reservations 
privateRotutes.get("/reservations",reservationUseCases.searchAll);
privateRotutes.get("/reservations/:id",reservationUseCases.searchById);

privateRotutes.delete("/reservations/:id",genericFuncs.remove("products"))

// requests 
privateRotutes.get("/requests",requestUseCases.searchAll);
privateRotutes.get("/requests/:id",requestUseCases.searchById);


// procedures 


privateRotutes.delete("/procedures/:id",genericFuncs.remove("procedures"))


export default privateRotutes;
