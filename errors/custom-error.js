

class CustomAPIError extends Error {
    constructor(message, statuscode) {
        super(message)
        this.statuscode = statuscode
    }
}

const CreateCustomAPIError = (message, statuscode) => {
    return new CustomAPIError(message, statuscode)
}

module.exports = { CreateCustomAPIError, CustomAPIError }