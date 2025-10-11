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
  function fun1(){
    let data1=[...apiData].sort((a,b)=>{
      return a.rating-b.rating
    })
    SetData(data1)
  }
  function fun2(){
    let data2=[...apiData].sort((a,b)=>{
      return b.rating-a.rating
    })
    SetData(data2)
  }
  function lunch(SearchValue){
    let filtereddata=[...apiData].filter((a)=>{
      return a.mealType[0]==SearchValue
    })
    SetData(filtereddata)
  }
  return (
    
    <div>
      <div id="sameline">
      <button class="sort"onClick={fun1}>acs</button>
      <button class="sort" onClick={fun2}>dcs</button>
      <button class="sort" onClick={()=>lunch("Lunch")}>Lunch</button>
      <button class="sort" >BreskFast</button>
      <button class="sort" >Dinner</button>
    </div>
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