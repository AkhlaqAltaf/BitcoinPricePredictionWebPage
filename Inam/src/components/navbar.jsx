import img from '../../public/images/btc-logo.webp'
function Navbar(){

    return(
        <>
    
    <nav class="nav1">
        <h3>Bitcoin Needs Your Support</h3>
    </nav>
    <nav class="nav">
      <img src={img} alt="" />
      <div class="nav2">
        <a href=""><h4>Home</h4></a>
        <a href=""><h4>Services</h4></a>
        <a href=""><h4>About</h4></a>
        <a href=""><h4>Products</h4></a>
        <a href=""><h4>Contact</h4></a>
      </div>
    </nav>

    

    
        </>
    )
}
export default Navbar;