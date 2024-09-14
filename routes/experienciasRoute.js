const express = require('express');
const router = express.Router();
const experienciasCtrl = require('../controllers/experienciasCtrl');

// Rutas
router.get('/', experienciasCtrl.getAllExperiences);
router.post('/', experienciasCtrl.createExperience);
router.put('/:id', experienciasCtrl.updateExperience);
router.delete('/:id', experienciasCtrl.deleteExperience);

module.exports = router;
