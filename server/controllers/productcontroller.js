const db=require('../DataBase/DataBaseConnection')

const user=db.users

const Product=db.products

// create product
const addProduct=async(req,res)=>{
    let info={

        name:req.body.name,
        description:req.body.description,
        price:req.body.price
        
    }

    const product=await Product.create(info)
    res.status(200).send(product)


}
//getall product

const getallproducts=async(req,res)=>{
    let products =await Product.findAll({
//i can get only the two attribute title and price 
        // attributes:[
        //     'title',
        //     'price'
        // ]

        // or i keep it findAll ({})

    })
    
   

    res.status(200).send(products)


}

//get singleProduct

const getOneProduct=async(req,res)=>{
    let id=req.params.id
    let products=await Product.findOne({where:{id: id}})
    res.status(200).send(products)
}


//update Product

const updateProduct=async(req,res)=>{
    let id=req.params.id
   
    let products=await Product.update(req.body,{where:{id: id}})
    res.status(200).send(products)
}

//delete Product
const deleteProduct=async(req,res)=>{
    let id=req.params.id
   
    await Product.destroy({where:{id: id}})
    res.status(200).send('deleted')
}

module.exports={
    addProduct,
    getOneProduct,
    getallproducts,
    updateProduct,
    deleteProduct
     


}

