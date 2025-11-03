import React,{useMemo, useState}from 'react'

const MemoUSe = () => {
//  let [data, SetData] = useState(0)
//      let res=0
//      for( let i=0; i<1000000000; i++)
//          res+=i
//    return (
//      <div>
//          <h2>{res}</h2>
//          <h2>{data}</h2>
//          <button onClick={()=>SetData(data+1)}>click</button>
//      </div>
//    )
 let [data, SetData] = useState(0)
 const res = useMemo(()=> {
    let total=0
    for(let i =0; i<10000000000; i++){
        total +=i
    }
    return total
 },[])
 return (
    <div>
        <h2>{res}</h2>
         <h2>{data}</h2>
     <button onClick={()=>SetData(data+1)}>click</button>
    </div>
 )


}

export default MemoUSe