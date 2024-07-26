const db= require('../DataBase/DataBaseConnection')

const Cart=db.Cart




const addCart=async(req,res)=>{
    let info={

        cartid:req.body.cartid,
        userid:req.body.userid,
        idproduct:req.body.productid,

        
    }

    const cart=await Cart.create(info)
    res.status(200).send(cart)


}




const getCart = async (req, res) => {
    try {
     
      const cart = await Cart.findAll({
        where: {
            userid: req.params.userid 
        },
        
      });
  
      res.status(200).send(cart);
    } catch (error) {
      console.error('Error', error);
      
    }
  };

  
const getCartbyp = async (req, res) => {
    try {
     
      const cart = await Cart.findAll({
        where: {
            productid: req.params.productid 
        },
        
      });
  
      res.status(200).send(cart);
    } catch (error) {
      console.error('Error', error);
      
    }
  };







  const deleteCart = async (req, res) => {
    try {
      let userId = req.params.userid; 
  
     
      await Cart.destroy({
        where: {
          userid: userId 
        }
      });
  
      res.status(200).send('Deleted all cart  for userId: ' + userId);
    } catch (error) {
      console.error(error);
      
    }
  };

  



  module.exports={
    getCart,deleteCart,addCart,getCartbyp
  }