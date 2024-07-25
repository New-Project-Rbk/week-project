const productcontroller=require('../controllers/productcontroller')
const router=require('express').Router()





router.post('/addproduct',productcontroller.addProduct)
router.get('/allproduct',productcontroller.getallproducts)
router.get('/:id',productcontroller.getOneProduct)
router.delete('/:id',productcontroller.deleteProduct)
router.put('/:id',productcontroller.updateProduct)

module.exports=router
