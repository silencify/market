import express, { Router  } from 'express';
import { getRole } from './controller';

const router: Router = express.Router()

router.get('/', getRole);

export default router;
