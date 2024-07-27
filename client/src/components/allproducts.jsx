import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageurl, setImageUrl] = useState("");
  const [reload,setReload]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('http://127.0.0.1:3000/api/products/all');
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [!reload]);


  const handleAddproduct = () => {
    
    axios.post("http://localhost:3000/main/products/add", {name:name,description:description,price:price,imageurl:imageurl})
      .then((response) => {
        console.log(response);
        setReload(!reload)


      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };


  const handleDeleteProduct = () => {
    axios.delete(`http://localhost:3000/main/products/${productid}`)
      .then((res) => {
console.log(res); 
setReload(!reload)

      })
      .catch((error) => {
        console.error("Error deleting worker:", error);
      });
  };


  const handleOneProduct = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/api/products/${productid}`)
      setProduct(response.data);
   
    } catch (error) {
      
      console.error('Error', error);
    }
  };















  return (
    <section className={classes.productPage}>
      

      <div className={classes.container}>
        {/* {data.map(product => (
          
        ))} */}
      </div>
    </section>
  
  );
};

export default Products;



