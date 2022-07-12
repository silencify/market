import db from '../../../config/db';

interface Create {
    username: string
    email: string
    password: string
    companyId: number
    roleId: number
}

const get = (): Promise<string> => new Promise(async (resolve, reject) => {
    try {
        
    } catch (err) {
        console.log({err})
    }
})

const create = (data: Create): Promise<Object> => new Promise(async (resolve, reject) => {
    try {
        const { username, email, password, companyId, roleId } = data;
        const query: string = `
            INSERT INTO Users (username, email, password, companyId, roleId)
                VALUES ('${username}', '${email}', '${password}', '${companyId}', '${roleId}')
        `;
        const response: Array<number> = await db.query(query)
        resolve(response)
    } catch (err) {
        reject(err)
    }
})

export {
    get,
    create
}
