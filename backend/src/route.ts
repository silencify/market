import express, { Router } from 'express';
import company from './api/company';
import user from './api/user';
import verify from './api/verify';

const router: Router = express.Router();

router.use('/verify', verify);
router.use('/company', company)
router.use('/user', user)

export default router;
