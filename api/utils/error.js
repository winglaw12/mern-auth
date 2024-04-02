export const errorHandler = (statusCode, message) => {
    const error = new Error()
    error.statuCode = statusCode
    error.message = message
    return error
}