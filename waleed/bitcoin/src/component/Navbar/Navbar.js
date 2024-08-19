import "./Navbar.css";
import { Link, link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div class="top-navbar">
        <h2>Bitcoin Prediction </h2>
        <h5>
          Our most recent Bitcoin price forecast indicates that its value will
          increase by 16.27% and reach $67,374 by August 18, 2024
        </h5>
      </div>

      <div class="navbar">
        {/* <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Firnas Logo"
            id="navbar-logo"
          />
        </div> */}

        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/bitcoin detail">Bitcoin Detail</Link>
          </li>
          <li>
            <Link to="contact us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
