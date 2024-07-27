const db=require('../DataBase/DataBaseConnection');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const signUp=async(req,res)=>{
 

    try{
        const {firstName,lastName,email,password}=req.body;
        const test=await db.User.findOne({where:{email}})
        if(test) return res.send('email already inuse');
        await db.User.create({firstName,lastName,email,password:await bcrypt.hash(password,15)})
        return res.send('signUp succeful');
        





    }

    catch (err){
        return res.send('error',err);
    }

}
const logIn=async(req,res)=>{
 

    try{
        const {email,password}=req.body;
        const test=await db.User.findOne({where:{email}})
        if(!test)return res.send('email not exist');
        const testpassword=await bcrypt.compare(password,test.password)
        if(!testpassword) return res.send('not valide')
        else {
    const token=jwt.sign({userid:test.userid},'tethachhech')
    res.send(token)
    
        }
       
    }

    catch (err){
        return res.send('error',err);
    }

}

module.exports={signUp,logIn}