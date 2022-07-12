import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import status from '../../constant/statusCodes';
import { Err } from '../user/userInterface'

const validateCreateUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    const schema = Joi.object({
        username: Joi.string().required().error(() => new Error('Invalid username')),
        email: Joi.string().email().required().error(() => new Error('Invalid email')),
        password: Joi.string().required().error(() => new Error('Invalid password')),
        companyId: Joi.number().integer().strict().required().error(() => new Error('Invalid company id')),
        roleId: Joi.number().error(() => new Error('Invalid role id')),
    }) 
    
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        const { message } = err as Err;
        return res.status(status.BAD_REQUEST).json({error: message});
    }
}

const validateLoginUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
    const schema = Joi.object({
        email: Joi.string().email().required().error(() => new Error('Invalid email')),
        password: Joi.string().required().error(() => new Error('Invalid password')),
    })

    try {
        await schema.validateAsync(req.body);
        next();
    } catch (err) {
        const { message } = err as Err;
        return res.status(status.BAD_REQUEST).json({error: message});
    }
}

export {
    validateCreateUser,
    validateLoginUser
}

