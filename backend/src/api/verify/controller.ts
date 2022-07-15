import { Request, Response } from 'express';
import statusCodes from '../../constant/statusCodes';
import { get } from './model';

const checkUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const response: Array<Object> = await get();
        if (!response.length) {
            throw new Error('No users');
        }

        res.status(statusCodes.SUCCESS).json({status: 'success'})
    } catch (err) {
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: 'Error verifying'})
    }
}

export {
    checkUser
}
