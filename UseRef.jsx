import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    let [input, SetInput] = useState("")
    // let [data, SetData] = useState()
    let count = useRef(0)
    useEffect(()=>{
        // SetData(data+1)
        count.current+=1
    })
  return (
    <div>
        <h1>{count.current}</h1>
        <input  type="text" onChange={(e)=>SetInput(e.target.value)}/>
    </div>
  )
}

export default UseRef