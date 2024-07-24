
const { Sequelize,DataTypes } = require('sequelize');
const dbconfig=require('./dbconfig.js');
// const bcrypt = require('bcryptjs');

// Replace with your actual database configuration
const sequelize = new Sequelize(dbconfig.DATABASE, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.DIALECT,
  dialectModule: require('mysql2')
});

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.Product=require('../models/productmodel.js')(sequelize,DataTypes)
db.User=require('../models/usersmodel.js')(sequelize,DataTypes)
db.Cart=require('../models/cartmodel.js')(sequelize,DataTypes)

db.User.hasMany(db.Cart,{foreignKey:'userid'})
db.Cart.belongsTo(db.User,{foreignKey:'userid'})

db.Product.hasMany(db.Cart,{foreignKey:'productid'})
db.Cart.belongsTo(db.Product,{foreignKey:'productid'})


db.sequelize.sync({force:false})
.then(()=>{
  console.log('yes re-sync done')
})


sequelize.authenticate()
.then(()=>{
  console.log('connected')
})
.catch(err=>{
  console.log('error',err);
})





module.exports=db



