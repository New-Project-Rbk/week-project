const db= require('../DataBase/DataBaseConnection')

const Cart=db.Cart

async function getCartProducts(req, res) {
  try {
    const userId = req.params.userid

    if (!userId) {
      return res.status(400).send({ error: 'User ID is required' });
    }

    const cartItems = await db.Cart.findAll({
      where: {
        userid: userId
      },
      include: [
        {
          model: db.Product,
          attributes: ['name', 'price', 'description', 'imageUrl','productid']
        },
        {
          model: db.User,
          attributes: ['userid']
        }
      ]
    });

    

    res.send(cartItems);
  } catch (error) {
    console.error('Error fetching cart products:', error);
    res.status(500).send({ error: 'An error occurred while fetching cart products' });
  }
}



const addCart=async(req,res)=>{
    let info={

        
        userid:req.body.userid,
        productid:req.body.productid,

        
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
      let userId = req.params.cartid; 
  
     
      await Cart.destroy({
        where: {
          cartid: userId 
        }
      });
  
      res.status(200).send('Deleted all cart  for userId: ' + userId);
    } catch (error) {
      console.error(error);
      
    }
  };

  



  module.exports={
    getCart,deleteCart,addCart,getCartbyp,getCartProducts
  }