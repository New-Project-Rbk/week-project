const cartcontroller=require('../controllers/cartcontroller')
const router=require('express').Router()





router.post('/addCart',cartcontroller.addCart)
router.get('/:userid',cartcontroller.getCartProducts)

// router.get('/:userid',cartcontroller.getCart)
router.delete('/:userid',cartcontroller.deleteCart)


module.exports=router