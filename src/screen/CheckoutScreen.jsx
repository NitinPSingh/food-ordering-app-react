import React,{useState,useEffect} from 'react'
import CheckoutScreenCard from '../components/CheckOutScreenCard'
function CheckoutScreen(props) {
    const [total,setTotal] =useState([])
    useEffect(() => {
        let totalprice = 0
        props.finalOrder.map((t) => totalprice = totalprice + t.price * t.qty)
        setTotal(totalprice.toFixed(2))
        
    }, [props.finalOrder])
    return (
        <div className="cccontainer">
         <h1>Your Orders:</h1>
        <div className="checkcont">
       
        {props.finalOrder.map((t) => (

       
            <CheckoutScreenCard items={t} />
            
        )

        )}
        
        

        </div>
        <h1 style={{textAlign:"center"}}>Total:${total}</h1>
        </div>
    )
}



export default CheckoutScreen