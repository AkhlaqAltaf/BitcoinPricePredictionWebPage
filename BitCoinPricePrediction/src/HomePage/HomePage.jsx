import NavigationBar from "../NavigationBar/NavigationBar";
import BitCoinPredictImg from '../../public/Images/BitCoinPred.png'
import Footer from "../Footer/Footer";
import './HomePage.css'
import InstaImg from '../../public/Images/instaLogo.png'
import fbImg from '../../public/Images/fbLogo.png'


function HomePage() {
    return (
        <>
            <NavigationBar />

            <div className="home-page">
                <div id="HomePage-Contant">
                    <h2>Bitcoin Price Prediction 2028</h2>
                    <p>
                        With the 5th Halving, the Bitcoin price will see another bullish spark in 2028. Specifically, as per Bitcoin Price Prediction 2028, the potential BTC price range in 2028 is $174,063 to $192,908. The average price is also expected to be $183,485, demonstrating continued positive momentum.</p>
                </div>
                <img src={BitCoinPredictImg} alt="" />
            </div>
            
            <div id="about-page">
                <h2>About Us</h2>
                <div id="about-content">
                    <p>Our team is comprised of experienced data scientists and engineers who have a passion for cryptocurrency </p>
                    <img src={InstaImg} alt="" />
                    <p>Our team is comprised of experienced data scientists and engineers who have a passion for cryptocurrency </p>
                    <img src={fbImg} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage