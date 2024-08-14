import { useState } from 'react'

import './App.css'
import "./styles/style.css";
import Navbar from './components/navbar';
import img from '../public/images/about.jpg';
import About from './components/about';
import Form from './components/form';


function App() {

  return (
    <>

<body>
 <div className="main">
<Navbar/>
<div class="Container">
    <div class="left">
        <h4>Welcome to <span>BitCoin</span> Price Prediction</h4>
        <h1><span>Bitcoin</span> is an innovative payment network and a new kind of money.</h1>
          <div className='btns'>
            <button className='btn'>Predict Now</button>
            <button className='btn1'>Choose Your Wallet</button>
            <button className='btn2'>Buy BitCoin</button>
          </div>
    </div>   
  </div>

    <About/>
    <Form/>
    </div>  
</body>
</>



  )




}



export default App
