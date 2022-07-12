import { Request, Response, NextFunction } from 'express';
import statusCodes from '../../constant/statusCodes';
import {Err} from '../user/userInterface';
import { get } from './model';

const getRole = async (req: Request, res: Response): Promise<void> => {
    try {
        const { role } = req.body;
        const response = await get({role});

        res.status(statusCodes.SUCCESS).json(response)
    } catch (err) {
        const { message } = err as Err
        const error: Err = {
            message: message || 'Failed to create user'
        };

        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}

export {
    getRole
}
