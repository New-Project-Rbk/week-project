 module.exports=( sequelize, DataTypes )=>{
    

// const User = require('../models/usersmodel'); 
 
const Product = sequelize.define('Product', {
    productid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,


    },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10,3),
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING, 
    allowNull: true 
  }

});

// Product.belongsTo(User); //  the User-Product relationship

return Product 
 }
