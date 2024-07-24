
module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('user',
       {
            userid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            },
            firstName:DataTypes.STRING,
            lastName:DataTypes.STRING,
            email:DataTypes.STRING,
            password:DataTypes.STRING


        },
        {

            freezeTableName:true,
            timestamps: false

        });


        return User;



};
