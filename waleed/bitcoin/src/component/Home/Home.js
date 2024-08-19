import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Form from './../Form/Form.js';
import Footer from './../Footer/Footer.js'
function Home() {
  return (
    <>
    
    <div class="container">
    
      <div class="content-container">
        
      
        <h1>Premeium bitcoin price prdiction of 2024 and 2025:</h1>
        
        <h3> BTC predictions from 7 top forecasters:</h3>
        <p>
          A selection of 7 experts are unanimously bullish on Bitcoin: consensus
          BTC price predictions around $200,000 by 2025. While aggressive, these
          BTC forecasts for 2025 seem realistic simply because the selection of
          these forecasters is made based on reputation.
        </p>
        <h3>BTC predictions from 10 institutions::</h3>
        <p>
          Crypto-focused financial institutions have unanimously bullish on
          Bitcoin predictions. Many of these institutions avoid specific targets
          but they predict significant upside potential in Bitcoin’s price.
          Those with Bitcoin targets see BTC rising well above $100,000 by 2025.
        </p>
        <h3>InvestingHaven’s top forecaster:</h3>

        <p>
          InvestingHaven’s Bitcoin forecast 2024 is based on Bitcoin’s cup and
          handle chart. BTC may drop to its bullish Fibonacci levels $50,882 or
          $41,997 which we predict to offer an epic buy opportunity. If support
          holds, InvestingHaven’s Bitcoin price prediction 2025 suggests targets
          in the $100,000 – $150,000 area.
        </p>
        <h4>Bitcoin’s predicted price range for 2024:</h4>
        <p>
          {" "}
          Bitcoin’s predictive research for 2024 suggests a forecasted BTC
          trading range between $54830.29 and $70910.75. The average predicted
          price for 2024 is $62314.19.
        </p>
        <h1>Update About Coin</h1>
        <div class="piccontainer">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/pic1.jpg`}
              alt="Firnas Logo"
              id="pic1"
            />
          </div>
        </div>
        <h1>27 Bitcoin predictions: one chart summary</h1>
        <h3>
          Bitcoin predictions: bullish target areas for 2024 & 2025, and bearish
          outliers
        </h3>
        <h4>
          InvestingHaven’s track record is outstanding. Our Bitcoin price
          predictions have proven to be very accurate. This is unusual
          considering the highly contrarian nature of our market calls. Hardly
          anyone believed the above mentioned calls at the time they were
          published.
        </h4>
        <p>
          Below is the long term Bitcoin chart. It suggests that a cup and
          handle chart formation is underway. If true, BTC is now working on the
          ‘handle’ which should be completed late 2024 / early 2025 which will
          be super bullish for BTC in 2025.
        </p>
        <p>
          InvestingHaven’s analyst has a very bullish Bitcoin price prediction
          2025: if the area $50,882 to $41,979 holds strong on a 3-week closing
          basis, BTC will resolve higher in 2025. The current long term bullish
          chart pattern has bullish targets in the $100,000 to $120,000 area
          provided support is respected.
        </p>
        <div class="piccontainer1">
          <div class="space">
            <h2>Graph:</h2>
            <h4>InvestingHaven’s track record is outstanding.</h4>
            <p>
              In October 2023, when markets were uncertain, InvestingHaven’s
              forecaster wrote How High Can Bitcoin Go In 2024? with this
              conclusion: “Bitcoin entered the area above its 50% retracement
              level. This bodes well for 2024, it suggests that Bitcoin can move
              higher in 2024, for sure it will move to 46k and potentially even
              66k.“
            </p>
            <p>
              In September 2023, when BTC was trading at $26k, InvestingHaven
              wrote: “Our base forecast for Bitcoin in 2024 is $45,600 with a
              bullish forecast being $66,000. We expect Bitcoin to move to
              all-time highs in 2025.”
            </p>
            <h4>
              InvestingHaven’s track record is outstanding. Our Bitcoin price
              predictions have proven to be very accurate. This is unusual
              considering the highly contrarian nature of our market calls.
            </h4>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/graph.png`}
              alt="Firnas Logo"
              id="pic2"
            />
          </div>
        </div>
        <h1> One chart summary</h1>
        <h3>InvestingHaven’s Bitcoin Price Forecast for 2024</h3>
        <h4>
          InvestingHaven’s track record is outstanding. Our Bitcoin price
          predictions have proven to be very accurate. This is unusual
          considering the highly contrarian nature of our market calls. Hardly
          anyone believed the above mentioned calls at the time they were
          published.
        </h4>
        <p>
          Below is the long term Bitcoin chart. It suggests that a cup and
          handle chart formation is underway. If true, BTC is now working on the
          ‘handle’ which should be completed late 2024 / early 2025 which will
          be super bullish for BTC in 2025.
        </p>
        <p>
          InvestingHaven’s analyst has a very bullish Bitcoin price prediction
          2025: if the area $50,882 to $41,979 holds strong on a 3-week closing
          basis, BTC will resolve higher in 2025. The current long term bullish
          chart pattern has bullish targets in the $100,000 to $120,000 area
          provided support is respected.
        </p>
        <div class="piccontainer">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/lastpic.png`}
              alt="Firnas Logo"
              id="pic1"
            />
          </div>
        </div>

      </div>
     
    </div>
     <Form/>
     <Footer/>
</>   
    
  );
}
export default Home;
