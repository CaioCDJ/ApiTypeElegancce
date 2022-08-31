import { Router } from 'express';
import * as reservationsUseCases from '../useCases/reservation/index';

const router = Router();

router.get("/",reservationsUseCases.searchAll);

export default router;
