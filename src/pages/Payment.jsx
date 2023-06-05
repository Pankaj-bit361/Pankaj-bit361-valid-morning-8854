import React, { useState } from 'react'
import './Payment.css'
import {  useNavigate } from 'react-router-dom';
import Alert1 from '../components/Alert1';
const Payment = () => {
    const [name,setName]=useState("");
    const [card,setCard]=useState("");
    const [exp,setExp]=useState("")
    const naviagte=useNavigate()
const [isAuth,setisAuth]=useState(false)


const onclicking=()=>{
setisAuth(true)
setTimeout(() => {
naviagte("/")
}, 2000);
}



  return (
    isAuth?<Alert1/>:
    <div>
       <div>
    <h1 id="h">Payment Information</h1>
  </div>
  <div id="main">

    <div id="card1">

      <div id="da">
      <img width="50px" id="jumbo" src="https://cdn-icons-png.flaticon.com/512/6404/6404078.png" alt='food'/>
      <div>
        <h6 class="margin"><span id="nam">{name.length===0?'Your Name':name}</span></h6>
        <h6 class="margin" > <span id="num">{card.length===0?'Card Number':card}</span></h6>
        <h6 class="margin"  > <span id="e">{exp.length===0?'Exp.Date(mm/yy)':exp}</span></h6>
</div>
      </div>

    </div>
    <div id="form">
      <label class="hello" >Name</label>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" id="name" maxLength="20" required=""/>
      <label class="hello" >Card Number</label>
      <input value={card} onChange={(e)=>setCard(e.target.value)} type="text" placeholder="Card Number" id="number" maxLength='16' required        />

      <label class="hello" >Expiration(mm/yy)</label>
      <input value={exp} onChange={(e)=>setExp(e.target.value)} type="text" id="ex"  maxLength="7" required placeholder="Expiration Date" />
      <label  class="hello" >Security code</label>
      <input type="text" id="code" maxLength="3" required placeholder="CVV / Number"/>
   
   <button onClick={onclicking} id="sc">Pay Now</button>
    
    

    </div>

  </div>
    </div>
  )
}

export default Payment
