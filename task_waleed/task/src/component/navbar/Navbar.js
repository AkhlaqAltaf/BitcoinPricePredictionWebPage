import "../navbar/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/img.jpg`} alt="bitcoin logo" />
      </div>
      <div class="content">
        <ul>
          {/* <a href="#">
              <li>HOME</li>
            </a>
            <a href="#">
              <li>ABOUT</li>
            </a>
            <a href="#">
              <li>CONTACT US</li>
            </a> */}

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
