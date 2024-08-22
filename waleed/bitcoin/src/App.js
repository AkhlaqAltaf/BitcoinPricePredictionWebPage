import "./App.css";
import Navbar from "./component/Navbar/Navbar.js";
import Home from "./component/Home/Home.js";
import About from "./component/About/About.js";
import Footer from "./component/Footer/Footer.js";
import Form from "./component/Form/Form.js";
import { Route, Routes } from "react-router";
import Bitcoin from "./component/Bitcoin/Bitcoin.js";
import Page from "./component/Page/Page.js";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bitcoin detail" element={<Bitcoin/>} />
        <Route path="/page" element={<Page/>} />
      </Routes>
    </>
  );
}

export default App;
