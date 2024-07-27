const productcontroller=require('../controllers/productcontroller')
const router=require('express').Router()





router.post('/add',productcontroller.addProduct)
router.get('/all',productcontroller.getallproducts)
router.get('/:productid',productcontroller.getOneProduct)
router.delete('/:productid',productcontroller.deleteProduct)
router.put('/:productid',productcontroller.updateProduct)

module.exports=router
