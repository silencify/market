import { Request, Response } from 'express';
import statusCodes from '../../constant/statusCodes';
import { create } from './model';

const createCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;
        const response: number = await create({name});
        res.status(statusCodes.SUCCESS).json({
            id: response
        });
    } catch (err) {
        console.log(err)
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({error: 'Failed to create company'});
    }
}

export default createCompany;
