import { Request, Response } from 'express';
import statusCodes from '../../constant/statusCodes';
import { get, create } from './model';

const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await get()
        res.status(statusCodes.SUCCESS).send(response);
    } catch (err) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: 'Failed to get user'})
    }
}

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password, companyId, roleId } = req.body
        const response = await create({username, email, password, companyId, roleId});
        res.status(statusCodes.SUCCESS).json(response);
    } catch (err) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: 'Failed to create user'})
    }
}


export {
    getUser,
    createUser
}

