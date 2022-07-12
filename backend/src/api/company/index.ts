import express, { Router } from 'express';
import createCompany from './controller';

const router: Router = express.Router();

router.post('/create', createCompany);

export default router;
