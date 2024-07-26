const cartcontroller=require('../controllers/cartcontroller')
const router=require('express').Router()





router.post('/addCart',cartcontroller.addCart)
router.get('/productid',cartcontroller.getCartbyp)

router.get('/:userid',cartcontroller.getCart)
router.delete('/:userid',cartcontroller.deleteCart)


module.exports=router