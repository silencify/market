import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import statusCodes from '../../constant/statusCodes';
import { get, create } from './model';
import { CreateUser, UserResponse, Err } from './userInterface';
import { RoleResponse } from '../role/roleInterface';
import { get as getRole } from '../role/model';

const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;
        const response: Array<Object> = await get({email});
        res.status(statusCodes.SUCCESS).send(response);
    } catch (err) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: 'Failed to get user'});
    }
}

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password, companyId, roleId: roleIdentity } = req.body;
        const userResponse: Array<CreateUser> = await get({email})

        if (userResponse.length) {
            throw new Error('User Exist')
        }

        let defaultRoleId: number | null = null;
        if (!roleIdentity) {
            const role: Array<RoleResponse> = await getRole({role: 'admin'})
            defaultRoleId = role[0].id;
        }

        const roleId = roleIdentity ? roleIdentity : defaultRoleId;
        const saltRounds: number = Math.floor(Math.random() * 10 + 1);
        const hashPassword: string = bcrypt.hashSync(password, saltRounds);
        const response: number = await create({username, email, password: hashPassword, companyId, roleId});
        res.status(statusCodes.SUCCESS).json({id: response});
    } catch (err) {
        const { message } = err as Err;
        const error: Err = {
            message: message || 'Failed to create user'
        };
        
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
}

const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const response: Array<CreateUser> = await get({email});
        const passwordMatch: boolean = bcrypt.compareSync(password, response[0].password);

        if (passwordMatch) {
            const userResponse: UserResponse = JSON.parse(JSON.stringify(response[0]));
            delete userResponse.password;
            const token: string = jwt.sign(userResponse, process.env.JWT_SECRET as string);
            res.status(200).json({token});
        }
    } catch (err) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: 'Failed to login user'})
    }
}

export {
    getUser,
    createUser,
    loginUser
}

