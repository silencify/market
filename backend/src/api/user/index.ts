import express, { Router } from 'express';
import { 
    getUser,
    createUser
} from './controller'

const router: Router = express.Router();

router.get('/', getUser);

router.post('/create', createUser);

export default router;

