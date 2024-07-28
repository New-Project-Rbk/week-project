import React, { useState } from 'react'
import axios from 'axios';

function NewProduct() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [url, setUrl] = useState("");
    

  
      

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
            setUrl(res.data);
            alert("Image uploaded Succesfully");
          })
          
          .catch(console.log);
      }
    
      function uploadMultipleImages(images) {
       
        axios
          .post("http://localhost:3000/uploadMultipleImages", { images })
          .then((res) => {
            setUrl(res.data);
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


      const handleAddproduct = () => {
    
        axios.post("http://localhost:3000/api/products/add", {name,description,price,imageUrl:url})
          .then((response) => {console.log(response,'data added');         
    
    
          })
          .catch((error) => {
            console.error("Error adding product:", error);
          });
      };





  return (
    <div>
        <p><input type="text " style={{color:"black",backgroundColor:'white', width:"350px",height:"50px",borderRadius:"20px"}} placeholder='name'
        onChange={(e)=>{setName(e.target.value)}}
        /></p>
        <p style={{marginTop:"35px"}}><input type="text " style={{color:"black",backgroundColor:'white', width:"350px",height:"50px",borderRadius:"20px"}} placeholder='description'
        onChange={(e)=>{setDescription(e.target.value)}}
        /></p>
        <p style={{marginTop:"35px"}}><input type="number" style={{color:"black",backgroundColor:'white', width:"350px",height:"50px",borderRadius:"20px"}} placeholder='price'
        onChange={(e)=>{setPrice(e.target.value)}}
        /></p>
        <p style={{marginTop:"35px"}}><input type="file"  placeholder='upload Image'
        onChange={uploadImage}
        /></p>
 {url && (
          <div>
            Access you file at{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
              <img src={url} alt="" />
            </a>
          </div>
        )}
        <button onClick={handleAddproduct}>submit</button>






    </div>
  )
}

export default NewProduct