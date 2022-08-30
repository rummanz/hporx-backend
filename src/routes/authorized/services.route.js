/**
 * Created by Jamshaid.
 */
 
const express = require('express')
const router = express.Router()

const controller = require('../../controllers').services

router.post('/createService', controller.createService)

router.post('/updateService', controller.updateService)
router.post('/removeService', controller.removeService)
router.post('/getServicesWithFullDetails', controller.getServicesWithFullDetails)
router.post('/getServicesList', controller.getServicesList)
router.post('/findServiceById', controller.findServiceById)
router.post('/populateDBWithSrvsPrvs', controller.populateDBWithSrvsPrvs)
router.post('/populateDBWithDoctorsPrvs', controller.populateDBWithDoctorsPrvs)
router.post('/populateDBWithLawyersPrvs', controller.populateDBWithLawyersPrvs)


module.exports = router