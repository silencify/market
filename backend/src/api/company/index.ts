import express, { Router } from 'express';
import createCompany from './controller';
import { validateCreateCompany } from './validator';

const router: Router = express.Router();

router.post('/create', validateCreateCompany, createCompany);

export default router;
