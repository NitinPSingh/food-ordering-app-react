import React from 'react'

export default function CheckoutScreenCard(props){
    return(
        <div className="CSCard">
        <img style={{maxWidth:"100px",}} id="foodimg"  src="https://www.thespruceeats.com/thmb/V4dx5tBv7LQF1kdu3LFzOc-FWZQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysian-potato-carrot-and-tomato-soup-3030415-hero-01-7d51917d0cd14e17a13495f4c9940100.jpg"
                            alt=""/>
        <div><h2>
            {props.items.name}
        </h2></div>
       <div><h2>x{props.items.qty}</h2></div>
        <div><h2>${props.items.price}</h2></div>
        
        </div>
    )
}
