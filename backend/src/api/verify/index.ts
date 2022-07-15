import  express, { Router } from 'express';
import { checkUser } from './controller';

const router: Router = express.Router()

router.get('/', checkUser);

export default router;
