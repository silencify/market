import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import statusCodes from '../../constant/statusCodes';
import { Err } from './interface';

const validateCreateCompany = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    const schema = Joi.object({
        name: Joi.string().required().error(() => { new Error('Invalid company name') })
    })

    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        const { message } = err as Err;
        return res.status(statusCodes.BAD_REQUEST).json({error: message});
    }
}

export {
    validateCreateCompany
}
