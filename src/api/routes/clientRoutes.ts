import { Router } from 'express';
import * as clientUseCases from '../useCases/client/index';
import * as genericFuncs from '../useCases/generic/index';

const clientRouter = Router();

clientRouter.get("/",genericFuncs.findAll("users"));
clientRouter.get("/:id",genericFuncs.findById("users"));

clientRouter.get("/:id/requests",clientUseCases.clientRequest);
clientRouter.get("/:id/reservations",clientUseCases.clientReservation)
clientRouter.get("/:id/reviews",clientUseCases.clientReview)

export default clientRouter;
