const express = require('express');
const routers = express.Router()

const { pageNotFoundController } = require('../controllers/page_not_found_controller')

routers.get('/', pageNotFoundController)
routers.post('/', pageNotFoundController)
routers.delete('/', pageNotFoundController)
routers.patch('/', pageNotFoundController)
routers.put('/', pageNotFoundController)

module.exports = routers

