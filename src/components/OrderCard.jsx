import React from 'react'

export default function OrderCard(props) {
  
    function addQty(){
      props.addQty(props.fooditems)
     
    }
    function minQty(){
      if(props.fooditems.qty===1){
        props.delete(props.fooditems._id)
      }
      else{
      props.minQty(props.fooditems)}
      
      
    }
    function delt(t){
      return function (){
        props.delete(t)
      }
    }
    return props.fooditems ? (
    
      
       <div className="ordercard" >
          <div className="orderimg"><img style={{maxWidth:"50px",}} id="foodimg"  src="https://www.thespruceeats.com/thmb/V4dx5tBv7LQF1kdu3LFzOc-FWZQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysian-potato-carrot-and-tomato-soup-3030415-hero-01-7d51917d0cd14e17a13495f4c9940100.jpg"
                              alt=""/> </div>
   <div> <div style={{
              fontWeight: "bold"
          }}>{props.fooditems.name}</div> < div > <span id="ordercard-weight">{props.fooditems.weight}g</span> </div> </div> <div
              id="capsule"
              style={{
              display: "flex",
              alignItems: "center"
          }}>
              <button id="buttonplus" onClick={addQty}>+</button>
              <span id="qty">{props.qty}</span>
              <button id="buttonminus" onClick={minQty}>-</button>
          </div> < div style = {{fontWeight:"bolder",display:"flex",alignItems:"center"}} > $ {
              (props.fooditems.qty * props.fooditems.price).toFixed(2)
          } </div>
          <div> <h3 id="cross" onClick={delt(props.fooditems._id)} >x</h3> </div> </div>
     
  ):(
    <>no item</ >)
  }
  