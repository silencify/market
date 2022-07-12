import express, { Router } from 'express';
import { 
    getUser,
    createUser,
    loginUser
} from './controller'

const router: Router = express.Router();

router.get('/', getUser);

router.post('/create', createUser);

router.post('/login', loginUser);

export default router;

