
const CustomAPIError = require('../errors/custom-error')

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statuscode).json({ message: err.message })
    }
    res.status(500).josn({ message: 'Something broke!' })
}

module.exports = errorHandler