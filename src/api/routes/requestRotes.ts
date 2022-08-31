import { Router } from 'express';
import * as requestUseCases from '../useCases/request/index';

const router = Router();


router.get("/",requestUseCases.searchAll);
router.get('/:id',requestUseCases.searchById);

export default router;
