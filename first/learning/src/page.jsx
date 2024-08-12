import { useEffect } from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import first from './pictures/first.jpg'
import second from './pictures/second2.avif'
 function Page(){
    return(
<>
       <button type='button' className='btn1'>Approximate price : 209,209.90589 </button>
       <div  className='about'>
        <div>
       <img src={first} alt="" />
        </div>
        <div>
         <h2>About Bitcoin</h2>
         <h5>How much will Bitcoin (BTC) be worth in 2025, 2026, 2027, up to 2030? Check out other opinions on price targets and project confidence levels — known as a Consensus Rating — when deciding on your own price targets. Data displayed are based on user input and not Binance's opinion.
         Ready to buy BTC? Binance accepts a wide range of currencies, making it easy for you to buy crypto using USD, EUR, CNY, AUD, INR, and other fiat currencies. Here are Ready to buy BTC? Binance accepts a wide range of currencies, making it easy for you to buy crypto using USD, EUR, CNY, AUD, INR, and other fiat currencies. Here are</h5>
        </div>
             </div>

              <div className='about1'>
        <div>
          <h2>About Bitcoin</h2>
        <h5>How much will Bitcoin (BTC) be worth in 2025, 2026, 2027, up to 2030? Check out other opinions on price targets and project confidence levels — known as a Consensus Rating — when deciding on your own price targets. Data displayed are based on user input and not Binance's opinion.
        Ready to buy BTC? Binance accepts a wide range of currencies, making it easy for you to buy crypto using USD, EUR, CNY, AUD, INR, and other fiat currencies. Here are Ready to buy BTC? Binance accepts a wide range of currencies, making it easy for you to buy crypto using USD, EUR, CNY, AUD, INR, and other fiat currencies. Here are</h5>
        </div>
        <div>
            <img src={second} alt="" />
        </div>
              </div>
        

</>
    )
}
export default Page;