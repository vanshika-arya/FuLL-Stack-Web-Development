import React, { useEffect, useState } from 'react'

const ProductListingStep1 = () => {
      let [apiData,SetData]=     useState([])
      useEffect (()=>{
        fetch("https://dummyjson.com/products").then((res)=>{
          return res.json()
    
        }).then((data)=>{
          console.log(data.products);
          SetData(data.products)
          
    
        })
    
      },[])
      function fun1(){
        
      }
    <div >
         <input type="text" placeholder='Search for Products' />
         <button onClick={fun1}>Search</button>
        {
           
       
        apiData.map((a,index)=>{
          return(<>
          <div id='card'>
            
          <img  src={a.images}/>
          <p>{a.price}</p>
            <p>{a.title}</p>
            <p>{a.id}</p>
           
          </div>
          </>)
        })
      }
    </div>
  
}

export default ProductListingStep1