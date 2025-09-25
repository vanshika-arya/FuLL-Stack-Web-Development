import React, { useEffect, useState } from 'react'
import './App.css'
const ApiImage = () => {
     let [apiData,SetData]=     useState([])
  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then((res)=>{
      return res.json()

    }).then((data)=>{
      console.log(data.recipes);
      SetData(data.recipes)
      

    })

  },[])

  function deletee(id){
    // console.log(id);
  let newArrr=   apiData.filter((a,b)=>{
      return  b!==id

    })
    SetData(newArrr)

    
  }
  return (
    <div>
      {
        apiData.map((a,index)=>{
          return(<>
          <div id='card'>
          <img  src={a.image}/>
            <p>{a.name}</p>
            <p>⭐{a.rating}</p>
            <button onClick={()=>deletee(index)}>DELETE</button>
            <button id="save">SAVE</button>
           
          </div>
          </>)
        })
      }
    </div>
  )
}

export default ApiImage