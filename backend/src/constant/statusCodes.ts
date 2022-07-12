interface Status {
    SUCCESS: number
    NOT_FOUND: number
    INTERNAL_SERVER_ERROR: number
    BAD_REQUEST: number
}

const status: Status = {
    SUCCESS: 200,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    BAD_REQUEST: 400
}

export default status;
