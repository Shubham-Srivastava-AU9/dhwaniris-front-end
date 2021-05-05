import React, { useState } from 'react'
import CardDisplay from './CardDisplay'

const App = () => {
  const [inputList,setInputList] = useState({
    box1: "", box2:"",box3:"",box4:""
  });
  const [number , setNumber] = useState([])

  const cardNumber = e =>{
    const {name,value} = e.target;
  
    setInputList({...inputList,[name]:value})
    
    

  }

  const cardNubers = (e)=>{
    setNumber((oldNum)=>{
      return [...oldNum , inputList]
    })
    e.preventDefault()

  }
 
const deleteItem =(id)=>{
  console.log('click');
  setNumber((old)=>{
      return old.filter((arrayElem,idx)=>{
          return idx!==id
      })
  })

}


  return (
    <div className="App">
    
    <p>Card Number *</p>
    <form>
      <input type='password' name = 'box1' maxLength="4" onChange ={cardNumber} value = {inputList.box1}/>
      <input type ='password' name = 'box2' maxLength="4" onChange ={cardNumber} value = {inputList.box2} />
      <input type ='password' name = 'box3' maxLength = "4" onChange ={cardNumber} value = {inputList.box3} />
      <input type ='password' name = 'box4' maxLength = "4" onChange ={cardNumber} value = {inputList.box4}/>
      <button onClick={cardNubers}>See Numbers</button>
    </form>
    <ol>
      {number.map((Number,index)=>{
         return <CardDisplay key={index} id= {index} text = {Number}
         onSelect = {deleteItem} 
        />
      })}
      </ol>
     
    
  </div>
  )
}

export default App
