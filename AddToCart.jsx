import React from 'react'
import './App.css'
const AddToCart = ({cart}) => {
  return (
    <div>
        <button>remove</button>
        {
            cart.map((a)=>{
                return (<>
                <div id='card'> 
                    <img  src={a.image}/>
            <p>{a.name}</p>
            <p> Rating: {a.rating}</p>
         <button  onClick={()=> SetCart([...cart,a])}>add </button>
         </div>
                </>)

            })
        }
    </div>
  )
}

export default AddToCart