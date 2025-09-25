import React, {useState} from 'react'

// const App = () => {
//   console.log("hii")
//   let [state ,SetState]= useState("0")
//   function fun1(){
//   SetState(state+1)
// }

//   return (
//     <div>
//       <h2> {state}</h2>
//       <button onClick={fun1} >click</button>
//     </div>
//   )
// }
// const App = () => {
//   console.log("hii")
//   let [state,SetState]= useState("red")
//   function fun1(){
//     SetState("green")
// }

//   return (
//     <div style={{backgroundColor:state}}>
//       <h2> {state}</h2>
//       <button onClick={fun1} >click</button>
//     </div>
//   )
// }
// const App = () => {
//   console.log("hii")
//   let [state,SetState]= useState("red")
//   function fun1(){
//     // SetState("green")
//     if(state=="green"){
//       SetState("white")
//     }
//     else{
//       SetState("green")
//     }
// }

//   return (
//     <div style={{backgroundColor:state}}>
//       <h2> {state}</h2>
//       <button onClick={fun1} >click</button>
//     </div>
//   )
// }
// import React from 'react'
// import Time from "./Time"
import Api from './Api'
import ApiImage from './ApiImage'



const App = () => {
  return (
    <div>
      <ApiImage />
      
    </div>
  )
}


export default App 