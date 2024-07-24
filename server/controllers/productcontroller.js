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
    const products =await Product.findAll({})
    res.status(200).send(products)
//i can get only the two attribute title and price 
        // attributes:[
        //     'title',
        //     'price'
        // ]

        // or i keep it findAll ({})

}

//get singleProduct

const getOneProduct=async(req,res)=>{
    let id=req.params.id
    const p=await Product.findOne({where:{id: id}})
    res.status(200).send(p)
}


//update Product

const updateProduct=async(req,res)=>{
    let id=req.params.id
   
    const pro=await Product.update(req.body,{where:{id: id}})
    res.status(200).send(pro)
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

