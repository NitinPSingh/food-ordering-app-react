
import './App.css';
import { Container } from 'react-bootstrap'
import React, {useState } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen'
import CheckoutScreen from './screen/CheckoutScreen'
import {NavLink} from "react-router-dom";




export default function App(){
  
    const [state,setState] =useState([])
    
   
  function callback(count) {
    
    setState([ ...count])
    console.log(count)
   }
   


  
    return (
      <div>
        <Router>
      
      <main className="main py-3">
      
      <NavLink to="/" exact style={{textDecoration:'none'}}>
      <div className = "menu" style={{display:'grid'}}>
        <h1 style={{alignSelf:'center',justifySelf:'center'}}>Menu</h1>
        </div>
        </NavLink>
      
        <Container>
          <Route path='/' component={ () => <HomeScreen callback={callback} />} exact />
          <Route path='/checkout' component={ () => <CheckoutScreen finalOrder={state} />} exact />
        </Container>
      </main>
      
    </Router>
      </div>
    )
  
}







