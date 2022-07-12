import db from '../../../config/db'

interface Create {
    name: string
}

const create = (data: Create): Promise<number> => new Promise(async (resolve, reject) => {
    try {
        const { name } = data;
        const query: string = `INSERT INTO Companies (name) VALUES ('${name}')`;
        const [ results ]: Array<number> = await db.query(query);
        resolve(results);
    } catch (err) {
        reject(err);
    }
}) 

export {
    create
}
