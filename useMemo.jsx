import React, { useState } from 'react'

const useMemo = () => {
    let [data, SetData] = useState(0)
    let res=0
    for( let i=0; i<100005; i++)
        res+=i
  return (
    <div>
        <h2>{res}</h2>
        <h2>{data}</h2>
        <button onClick={()=>SetData(data+1)}>click</button>
    </div>
  )
}

export default useMemo