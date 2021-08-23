import React from 'react'
import  FoodCardContainer  from '../components/FoodCard'

import '../styles/styles.css';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function HomeScreen(props) {
    
    return (
        <DndProvider backend={HTML5Backend}>
        <FoodCardContainer  
        getOrderList = {props.callback} 

        />
        </DndProvider>
        
    )
}
