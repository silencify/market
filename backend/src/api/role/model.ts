import db from "../../../config/db";

interface GetRole {
    role: string
}

interface RoleResponse {
    id: number
    role: string
}

const get = (data: GetRole): Promise<Array<RoleResponse>> => new Promise(async (resolve, reject) => {
    try {
        const { role } = data;
        const query: string = `SELECT * from Roles WHERE role='${role}'`;
        const [ results ]: Array<Array<RoleResponse>> = await db.query(query);

        resolve(results);
    } catch (err) {
        reject(err)
    }
})

export {
    get
}
