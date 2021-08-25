import React from 'react'
import {useDrag} from "react-dnd";

export default function FoodCard(props) {

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
                {console.log(isDragging)}
                    <div className="foodcard-top">
                        <div id="rating">
                            <img
                                style={{
                                maxWidth: "12px"
                            }}
                              alt=""  src="https://image.flaticon.com/icons/png/512/1828/1828884.png"/> {props.fooditems.rating}</div>
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
                            src="https://www.thespruceeats.com/thmb/V4dx5tBv7LQF1kdu3LFzOc-FWZQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malaysian-potato-carrot-and-tomato-soup-3030415-hero-01-7d51917d0cd14e17a13495f4c9940100.jpg"
                            alt="" ></img>
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

