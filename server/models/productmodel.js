 module.exports=( sequelize, DataTypes )=>{
    

const User = require('../models/usersmodel');
 
const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

Product.belongsTo(User); //  the User-Product relationship

return Product 
 }
