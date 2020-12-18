const router=require('express').Router();
const getCategories=require('../controllers/category').getCategories;
const addCategory=require('../controllers/category').addCategory;
router.post('/',addCategory);

router.get('/',getCategories);

module.exports=router;