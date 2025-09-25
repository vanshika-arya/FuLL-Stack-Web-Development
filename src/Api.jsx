import React, { useEffect, useState } from 'react'
import './App.css'

const Api = () => {
    let [ApiData , SetApiData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data)
            SetApiData(data)
        })
    },[])
  return (
    <div>
       {
        ApiData.map((a)=>{
            return(<>
            <p> {a.id}</p>
            <h2>{a.title}</h2>
            </>)
        })
       }
    </div>
  )
}

export default Api