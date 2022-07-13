import db from '../../../config/db';
import { CreateUser, GetUser } from './interface';

const get = (data: GetUser): Promise<Array<CreateUser>> => new Promise(async (resolve, reject) => {
    try {
        const { email }  = data;
        const query: string = `SELECT * from Users WHERE email='${email}'`;
        const [ results ]: Array<Array<CreateUser>> = await db.query(query);
        resolve(results);
    } catch (err) {
        reject(err);
    }
})

const create = (data: CreateUser): Promise<number> => new Promise(async (resolve, reject) => {
    try {
        const { username, email, password, companyId, roleId } = data;
        const query: string = `
            INSERT INTO Users (username, email, password, companyId, roleId)
                VALUES ('${username}', '${email}', '${password}', '${companyId}', '${roleId}')
        `;
        const [ results ]: Array<number> = await db.query(query);
        resolve(results);
    } catch (err) {
        reject(err);
    }
})

export {
    get,
    create
}
