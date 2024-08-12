import { useState } from 'react'

import './App.css'
import "./styles/style.css";
import Navbar from './components/navbar';
import img from '../public/images/about.jpg';


function App() {

  return (
    <>

<body>
<Navbar/>
<div class="Container">
    <div class="left">
        <h1>Welcome to <span>BitCoin</span> Price Prediction</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid fugit totam praesentium, commodi placeat quaerat expedita. Ullam, nostrum fuga!</p>
        <button>Predict Now</button>
      </div>
      <div class="right">
      <img src={img} alt=""/>

      </div>
    </div>
</body>
</>



  )




}



export default App
