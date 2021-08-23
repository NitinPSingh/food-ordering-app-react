
import './App.css';
import { Container } from 'react-bootstrap'
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen'
import CheckoutScreen from './screen/CheckoutScreen'

function App() {
  var finalOrder = []
   
  const  callback = (count) => {
       
    finalOrder = [...count]
    
    
   }
   
  //  useEffect(()=>
  //  (
  //    setOrder(finalOrder),
  //    console.log("yesssss",finalOrder)
  //  ),[order])
  return ( 
<Router>
      
      <main className="main py-3">
      <div className = "menu" style={{display:'grid'}}>
      
        <h1 style={{alignSelf:'center',justifySelf:'center'}}>Menu</h1>
       
      </div>
        <Container>
          <Route path='/' component={ () => <HomeScreen callback={callback} />} exact />
          <Route path='/checkout' component={ () => <CheckoutScreen finalOrder={finalOrder} />} exact />
        </Container>
      </main>
      
    </Router>
  );
}

export default App;
