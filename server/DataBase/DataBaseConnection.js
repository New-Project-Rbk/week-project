
const { Sequelize,DataTypes } = require('sequelize');
const dbconfig=require('./dbconfig.js');
// const bcrypt = require('bcryptjs');

// Replace with your actual database configuration
const sequelize = new Sequelize(dbconfig.DATABASE, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.DIALECT,
  dialectModule: require('mysql2')
});

sequelize.authenticate()
.then(()=>{
  console.log('connected')
})
.catch(err=>{
  console.log('error',err);
})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.products=require('../models/productmodel.js')(sequelize,DataTypes)
db.users=require('../models/usersmodel.js')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
  console.log('yes re-sync done')
})


module.exports=db



