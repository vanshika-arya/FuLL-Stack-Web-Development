//dynamic time
// import React,{useState} from 'react'

// const Time = () => {
//      let [count, SetCount]=useState(0)
//         setInterval(()=>{
//             SetCount(new Date().toLocaleTimeString())
//         })
//   return (
//     <div>
//         <h2>{count}</h2>
//     </div>
//   )
// }

// export default Time

import React, { useEffect, useState } from 'react'

const Time = () => {
  
  let [count, SetCount]=useState(0)
  let [city,SetCity]=useState('delhi')
  useEffect(()=>{
    console.log("hello")
  },[])
  return (
   <div>
    <h2>{count}</h2>
    <button onClick={()=>SetCount(count+1)}>click</button>
    <h3>{city}</h3>
     <button onClick={()=>SetCity("bhopal")}>click</button>
   </div>
  )
}

export default Time