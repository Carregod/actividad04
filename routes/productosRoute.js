const express = require('express');
const router = express.Router();
const productosCtrl = require('../controllers/productosCtrl');


router.get('/', productosCtrl.getAllProducts);
router.post('/', productosCtrl.createProduct);
router.put('/:id', productosCtrl.updateProduct);
router.delete('/:id', productosCtrl.deleteProduct);

module.exports = router;
