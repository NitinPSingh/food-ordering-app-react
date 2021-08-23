import React, {useState, useEffect} from 'react'
import fooditems from '../fooditems';
import {useDrag, useDrop} from "react-dnd";
import {NavLink} from "react-router-dom";
export default function FoodCardContainer(props) {
    const [liked,
        setLiked] = useState("")
    const [total,
        setTotal] = useState(0)
    function handleLike(e) {
        setLiked(prevNotes => {
            return [
                ...prevNotes,
                e
            ];
        });

    }
    const [orderList,
        setOrderList] = useState([]);

    const addFoodToOrderList = (id) => {

        let index = 0
        const orderItem = fooditems.filter((f) => id === f._id)
        // const orderExist = orderList.filter((f) => f._id === orderItem._id)
        const orderExist = orderList.filter((f) => f._id === orderItem[0]._id);
        function findOrder(t) {
            for (index = 0; index < orderList.length; index++) 
                if (t._id == orderList[index]._id) 
                    break;
        return index
        }
        if (orderExist[0]) {

            index = findOrder(orderExist[0])
            orderList[index].qty = orderList[index].qty + 1

        }

        // if(orderExist[0]){   orderExist[0].qty=+1 } if(orderExist[0]){   newarr =
        // [...newarr,orderExist[0]] } console.log(newarr)
        orderExist[0]
            ? (setOrderList((preorderLists) => {
                return [...preorderLists]
            }))
            : (setOrderList((preorderLists) => {
                return [
                    ...preorderLists,
                    orderItem[0]
                ]
            }))

    };
    const [
        {
            isOver
        },
        drop] = useDrop(() => ({
        accept: "div",

        drop: (item) => {

            addFoodToOrderList(item.id)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }), [addFoodToOrderList]);

    function plusQty(t) {

        let index = 0

        // const orderExist = orderList.filter((f) => f._id === orderItem._id)

        function findOrder(t) {

            for (index = 0; index < orderList.length; index++) 
                if (t._id == orderList[index]._id) 
                    break;
        return index
        }
        index = findOrder(t)
        orderList[index].qty = orderList[index].qty + 1

        setOrderList([...orderList]);

    }
    function minusQty(t) {
        let index = 0

        // const orderExist = orderList.filter((f) => f._id === orderItem._id)

        function findOrder(t) {

            for (index = 0; index < orderList.length; index++) 
                if (t._id == orderList[index]._id) 
                    break;
        return index
        }
        index = findOrder(t)
        orderList[index].qty = orderList[index].qty - 1
        setOrderList([...orderList]);
    }
    function deleteItem(id) {
        console.log("id", id)
        let index = 0

        // const orderExist = orderList.filter((f) => f._id === orderItem._id)

        function findOrder(id) {

            for (index = 0; index < orderList.length; index++) 
                if (id == orderList[index]._id) 
                    break;
        return index
        }
        console.log("index", index)
        index = findOrder(id)
        let ordernew = orderList.splice(index, 1)
        setOrderList([...orderList]);

    }

    useEffect(() => {
        let totalprice = 0
        orderList.map((t) => totalprice = totalprice + t.price * t.qty)
        setTotal(totalprice.toFixed(2))
        props.getOrderList(orderList)

    }, [orderList])
    return (
        <div className="sub-main">
            <div className="foodcard-container">

                {fooditems.map((fooditems) => {
                    return (<FoodCard fooditems={fooditems} onLike={handleLike}/>);
                })}
            </div>
            <div>
                <div className="rightBox">
                    <div >
                        <h2
                            style={{
                            fontWeight: "bolder"
                        }}>My orders:</h2>
                    </div>
                    <div className="box">

                        {orderList
                            ? (orderList.map((t) => {

                                return (<OrderCard
                                    fooditems={t}
                                    addQty={plusQty}
                                    minQty={minusQty}
                                    delete={deleteItem}
                                    qty={t.qty}/>);
                            }))
                            : (
                                <h1>drag to add
                                </h1>
                            )
}
                    </div>
                    <div className="dragdrop" ref={drop}>
                        Drag&Drop
                    </div>
                    <div className="totalpriceblock">
                        <h2
                            style={{
                            fontSize: "bold"
                        }}>Total</h2>
                        <h2
                            style={{
                            alignSelf: "center",
                            justifySelf: "end",
                            fontSize: "bold"
                        }}>{total}</h2>
                    </div>
                    <NavLink to="/checkout" exact>

                        <button
                            style={{
                            width: "100%",
                            backgroundColor: "limegreen",
                            border: "0px",
                            borderRadius: "20px",
                            minHeight: "40px",
                            marginTop: "20px",
                            fontSize: "Large",
                            color: "white"
                        }}>
                            checkout
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

function FoodCard(props) {

    var colors = ['AntiqueWhite', 'MistyRose', 'WhiteSmoke', 'LemonChiffon', 'LightCyan'];
    const [
        {
            isDragging
        },
        drag] = useDrag(() => ({
        type: "div",
        item: {
            id: props.fooditems._id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    function handleLike() {

        props.onLike(props.fooditems)
    }

    return props
        ? (
            <div
                className="main-foodcard"
                ref={drag}
                style={{
                border: "0px",
                backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`
            }}>

                <div className="foodcard" id="foodcard">

                    <div className="foodcard-top">
                        <div id="rating">
                            <img
                                style={{
                                maxWidth: "12px"
                            }}
                                src="https://image.flaticon.com/icons/png/512/1828/1828884.png"/> {props.fooditems.rating}</div>
                        <div >
                            <i
                                onClick={handleLike}
                                style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "20px",
                                backgroundColor: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center"
                            }}
                                class="fa fa-heart-o"
                                aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="foodcard-middle">
                        <img
                            style={{
                            maxWidth: "100px"
                        }}
                            id="foodimg"
                            src="https://www.thespruceeats.com/thmb/V4dx5tBv7LQF1kdu3LFzOc-FWZQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysian-potato-carrot-and-tomato-soup-3030415-hero-01-7d51917d0cd14e17a13495f4c9940100.jpg"></img>
                    </div>
                    <div className="foodcard-bottom">

                        {props.fooditems.name}
                        <span id="foodcard-weight">{props.fooditems.weight}g</span>

                    </div>
                    <div
                        style={{
                        fontWeight: "bolder"
                    }}>${props.fooditems.price}</div>
                </div>

            </div>

        )
        : ( <> no item </>
    )
}



    




function OrderCard(props) {
  
  function addQty(){
    props.addQty(props.fooditems)
   
  }
  function minQty(){
    if(props.fooditems.qty==1){
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
        <div className="orderimg"><img style={{maxWidth:"50px",}} id="foodimg"  src="https://www.thespruceeats.com/thmb / V4dx5tBv7LQF1kdu3LFzOc - FWZQ = /960x0/filters : no_upscale(): max_bytes(150000): strip_icc(): format(webp) / malaysian - potato - carrot - and - tomato - soup - 3030415 - hero - 01 - 7 d51917d0cd14e17a13495f4c9940100.jpg " /> </div>
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
