interface Status {
    SUCCESS: number
    NOT_FOUND: number
    INTERNAL_SERVER_ERROR: number
}

const status: Status = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
}

export default status;
