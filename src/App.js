import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Admin from './components/newclass/inventory/Admin';
import './App.css';
import { Link } from 'react-router-dom';


import Landing from './components/newclass/inventory/landing';
import Nav from './components/newclass/inventory/Nav';
import User from './components/newclass/inventory/User';
import Login from './components/newclass/inventory/Login';
import SignUp from './components/newclass/inventory/SignUp';
import { Router } from 'react-router-dom'; 

const App = ()=>{
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/sign-in"}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


  const [goods, setGoods] = useState([]);
  const deleteGood = i=>{
    let newGoods = goods.filter((_, ind)=>i!==ind);
    setGoods(newGoods);
 }
 const addGood = good=>{
  setGoods([...goods, good]);
}
const deductGood = goodsToDeduct =>{
  let getAllGoods = [...goods];
  for (let index = 0; index < getAllGoods.length; index++) {
    for (let i = 0; i < goodsToDeduct.length; i++) {
      if(index === goodsToDeduct[i].index && getAllGoods[index].goodQty>= goodsToDeduct[i].qty){
        getAllGoods[index].goodQty -=goodsToDeduct[i].qty; 
      }
      
    }
    
  }
  setGoods(getAllGoods);
}

  return(

    <>
    <Nav/>
    <br/>
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/" exact component={Login}/>
      <Route path="/" exact component={SignUp}/>
      <Route path="/admin" render={(props)=><Admin {...props} goods={goods} deleteGood={deleteGood} addGood={addGood}/>}/>
      <Route path="/user" render={(props)=><User {...props} goods={goods} deductGood={deductGood}/>}/>
    </Switch>

  
      
    </>
  )
}
export default App;