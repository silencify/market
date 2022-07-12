export interface CreateUser {
    username: string
    email: string
    password: string
    companyId: number
    roleId?: number
}

export interface GetUser {
    email: string
}

export interface UserResponse {
    username: string
    email: string
    password?: string
    companyId: number
    roleId: number
}

export interface Err {
    message: string
}
