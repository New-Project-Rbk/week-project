import React, { useState , useEffect } from 'react';
import { NavbarDefault } from './NavbarDefault';
import {jwtDecode} from 'jwt-decode'



import axios from 'axios'
import {
   
    Button,
    
  } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';




const LandingPage = () => {      
    const [data, setData] = useState([]);
    const [show,setShow]=useState(false)
    const [input,setInput]=useState('')
    const navigate = useNavigate()

     const fetchData=() => {
        axios.get('http://127.0.0.1:3000/api/products/all')
        .then((response)=>setData(response.data))   

        .catch(error=>console.error('Error fetching data:', error.message))  
      };

    useEffect(() => {
      
    
        fetchData();
      }, []);
      var x = ''
      var y = {}
      if (localStorage.getItem('lolo')) {
        x=JSON.stringify(localStorage.getItem('lolo'))
        y = jwtDecode(x)
        
      }
      const deletor =(id)=>{
        axios.delete(`http://127.0.0.1:3000/api/products/${id}`)
        .then(() => {
            fetchData()
        }).catch((err) => {
            console.log(err);
            
        });
      }
      const updaterr=(id,joker)=>{
        axios.put(`http://127.0.0.1:3000/api/products/${id}`,joker)
        .then(() => {fetchData()
            
        }).catch((err) => {
            console.log(err);
        });
      }
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
    
      function uploadSingleImage(base64) {
        
        axios
          .post("http://localhost:3000/uploadImage", { image: base64 })
          .then((res) => {
            setInput(res.data);
            alert("Image uploaded Succesfully");
          })
          
          .catch(console.log);
      }
    
      function uploadMultipleImages(images) {
       
        axios
          .post("http://localhost:3000/uploadMultipleImages", { images })
          .then((res) => {
            setInput(res.data);
            alert("Image uploaded Succesfully");
          })
          
          .catch(console.log);
      }
    
      const uploadImage = async (event) => {
        const files = event.target.files;
        console.log(files.length);
    
        if (files.length === 1) {
          const base64 = await convertBase64(files[0]);
          uploadSingleImage(base64);
          return;
        }
    
        const base64s = [];
        for (var i = 0; i < files.length; i++) {
          var base = await convertBase64(files[i]);
          base64s.push(base);
        }
        uploadMultipleImages(base64s);
      };
      const addToCart =(addCart)=>{
        axios.post('http://127.0.0.1:3000/api/cart/addCart',addCart)
        .then(() => {
            console.log('product added');
            
        }).catch((err) => {
            console.log(err);
            
        });


      }


     
    
     

      

    return (
        <div>
            < NavbarDefault fetchData={fetchData}/>
        <section className="py-12 bg-white sm:py-16 lg:py-20"  style={{backgroundColor:'transparent'}}>
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl" >
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl" style={{color:'wheat'}}>Welcome To Wiiz Time Shop </h2>
{       localStorage.getItem('lolo') &&     <p style={{color:'wheat'}} className="mt-4 text-base font-normal leading-7 text-gray-600">Please make yourself at Home ⌚⌚⌚⌚⌚</p>
}            {!localStorage.getItem('lolo')&&<p style={{color:'wheat'}} className="mt-4 text-base font-normal leading-7 text-gray-600">Please Login or Sign-up ⌚⌚⌚⌚⌚</p>}
{y.email==='admin'&& <p style={{color:'wheat'}} className="mt-4 text-base font-normal leading-7 text-gray-600">🚨🚨🚨🚨🚨   Admin Mode  🚨🚨🚨🚨🚨</p>}
        </div>

       
<div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
{data.map(e=>{
            return(
                <div key={e.productid}>
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img style={{ maxWidth: 345,height: 400 ,borderRadius:'20px' }}

                    

  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"  src={e.imageUrl} alt={e.name}  />



                </div>
                <div className="absolute left-3 top-3">
                    <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">Sale</p>
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="">
                                {e.name}
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        <div className="flex items-center mt-2.5 space-x-px">
                       
                            <p style={{color:'wheat' ,height:250}}>Description⌚    {e.description}</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base" style={{color:'wheat'}}>${e.price}</p>
                    </div>
                 
                </div>
            </div>
           {localStorage.getItem('lolo')&& <div>
            <Button style={{border: "2px solid wheat"}} fullWidth variant="gradient" size="sm" className="" onClick={()=>addToCart({productid:e.productid,userid:y.userid})} >
              <span>Add To Cart</span>
            </Button>
            <Button style={{border: "2px solid wheat"}} fullWidth variant="gradient" size="sm" className="" onClick={()=>navigate('/Checkout',{state:{elem:e}})}>
              <span>Buy</span>
            </Button>
            </div>}
           { y.email==='admin'&&<Button style={{border: "2px solid wheat" , backgroundColor:'red'}} fullWidth variant="gradient" size="sm" className=""
           onClick={()=>{deletor(e.productid)}}
           >
              <span>Delete</span>
            </Button>}
            { y.email==='admin'&&<Button style={{border: "2px solid wheat" , backgroundColor:'blue'}} fullWidth variant="gradient" size="sm" className=""
            onClick={()=>setShow(!show)}
            >
              <span>Update</span>
            </Button>}
            {show&&<div>
                <p><input type="text" placeholder='name' onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={()=>{updaterr(e.productid,{name:input})}}>Edit</button></p>

                <p><input type="text" placeholder='description' onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={()=>{updaterr(e.productid,{description:input})}}>Edit</button></p>


                <p><input type="number" placeholder='price' onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={()=>{updaterr(e.productid,{price:input})}}>Edit</button></p>

                <p><input type="file" placeholder='imageUrl' onChange={uploadImage} />
                <button onClick={()=>{updaterr(e.productid,{imageUrl:input})}} >Edit Image</button></p>
                </div>}
            </div>
            )
        })}
        </div>
    </div>
</section>
</div>

    )
}
export default LandingPage;