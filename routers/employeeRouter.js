const router = require('express').Router()

const { employeeControllers } = require('../controllers')

router.get('/pegawai', employeeControllers.employeeData1)
router.get('/pelanggan', employeeControllers.employeeData3)

module.exports = router;