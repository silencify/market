import express, { Router } from 'express';
import company from './api/company';
import user from './api/user';

const router: Router = express.Router();

router.use('/company', company)
router.use('/user', user)

export default router;
