import db from "../../../config/db"

const get = (): Promise<Array<Object>>=> new Promise(async (resolve, reject) => {
    try {
        const query: string = 'SELECT 1 FROM Users LIMIT 1';
        const [ results ]: Array<Array<Object>> = await db.query(query);
        resolve(results)
    } catch (err) {
        reject(err) 
    }
})

export {
    get
}
