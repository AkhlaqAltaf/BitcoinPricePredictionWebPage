import logo from "./logo.svg";
import "./App.css";

import About from "./component/About/About.js";
import HomePage from "./component/HomePage/HomePage";
import Navbar from "./component/navbar/Navbar.js";
import Footer from"./component/Footer/Footer.js";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <About />
      <Footer />
    </>
  );
}

export default App;
