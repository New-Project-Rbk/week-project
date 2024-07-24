const {signUp, logIn}=require('../controllers/usercontroller')
const router=require('express').Router()





router.post('/signUp',signUp)
router.post('/logIn',logIn)


module.exports=router