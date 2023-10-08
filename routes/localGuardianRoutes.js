const express = require('express');
const localGuardianController = require('../controllers/localGuardianController');

const router = express.Router();

router
  .route('/')
  .get(localGuardianController.getAllLocalGuardians)
  .post(localGuardianController.createLocalGuardian);

router
  .route('/:id')
  .get(localGuardianController.getLocalGuardian)
  .patch(localGuardianController.updateLocalGuardian)
  .delete(localGuardianController.deleteLocalGuardian);

module.exports = router;
