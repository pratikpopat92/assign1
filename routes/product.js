const router=require('express').Router();
const productController=require('../controllers/product');

router.get('/',productController.getAllProducts);

router.get('/:id',productController.getProductsByCategory);

router.post('/',productController.addProduct);

router.put('/:id',productController.updateProduct);

module.exports=router;