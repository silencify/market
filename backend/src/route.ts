import express from 'express';
import user from './api/user';

const router = express.Router();

router.use('/user', user)

export default router;
