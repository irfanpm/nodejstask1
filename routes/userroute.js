const express = require('express')
const router = express.Router()
const controller = require('../contollers/usercontroller')






router.get('/',controller.get)
router.post('/',controller.post)
router.get('/:id',controller.param)
router.delete('/:id',controller.dele)
router.put('/:id',controller.userput)
module.exports = router;