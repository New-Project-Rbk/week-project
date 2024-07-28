import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {jwtDecode} from 'jwt-decode'
import {
   
    Button,
    
  } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cart,setCart]=useState([])
    const navigate = useNavigate()
    var x = ''
      var y = {}
      if (localStorage.getItem('lolo')) {
        x=JSON.stringify(localStorage.getItem('lolo'))
        y = jwtDecode(x)
        
      }
      console.log(y.userid);

    const fatacha =()=>{
axios.get(`http://127.0.0.1:3000/api/cart/${y.userid}`)
.then((result) => {
    setCart(result.data)
}).catch((err) => {
    console.log(err);
})
    }

    useEffect(()=>{fatacha()},[])
    console.log(cart);

    const remover =(id)=>{
        axios.delete(`http://127.0.0.1:3000/api/cart/${id}`)
        .then(() => {
            fatacha()
        }).catch((err) => {
            console.log(err);
            
        });
      }


    
      return (




    <div>
         <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1" onClick={()=>navigate('/')}>
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Back</p>
                        </button>
        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            
{cart.map(e=>{
            return(
                <div key={e.Product.productid}>
            <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img style={{ maxWidth: 345,height: 400 ,borderRadius:'20px' }}

                    

  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"  src={e.Product.imageUrl} alt={e.Product.name}  />



                </div>
                <div className="absolute left-3 top-3">
                    <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">Sale</p>
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                        <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                            <a href="#" title="" style={{color:'wheat'}}>
                                {e.Product.name}
                                <span className="absolute inset-0" aria-hidden="true"></span>
                            </a>
                        </h3>
                        <div className="flex items-center mt-2.5 space-x-px">
                       
                            
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base" style={{color:'wheat'}}>${e.Product.price}</p>
                    </div>
                 
                </div>
            </div>
          
           <Button style={{border: "2px solid wheat" , backgroundColor:'red'}} fullWidth variant="gradient" size="sm" className=""
           onClick={()=>{remover(e.cartid)}}
           >
              <span>Remove</span>
            </Button>
            
           
         
            </div>
            )
        })}<br/>
        <p><h1>Total is ${cart.reduce((sum, item) => {
    return sum + parseFloat(item.Product.price);
}, 0)} </h1></p>
        <p><button>Checkout</button></p>
        
        </div>
    </div>
  )
}

export default Cart