import express, { Router } from 'express';
import { 
    getUser,
    createUser,
    loginUser
} from './controller'
import { 
    validateCreateUser,
    validateLoginUser
} from './validator';

const router: Router = express.Router();

router.get('/', getUser);

router.post('/create', validateCreateUser, createUser);

router.post('/login', validateLoginUser, loginUser);

export default router;

