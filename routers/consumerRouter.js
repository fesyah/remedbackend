const router = require('express').Router()

const { consumerControllers } = require('../controllers')

router.get('/pelanggan', consumerControllers.getDataConsumers)
router.patch('/pelanggan/edit/:id', consumerControllers.editDataConsumers)
router.delete('/pelanggan/delete/:id', consumerControllers.deleteDataConsumers)
router.post('/pelanggan/add/', consumerControllers.addData)
module.exports = router