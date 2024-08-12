import './NavigationBar.css'
import Logo from '../../public/Images/Logo.png'

function NavigationBar() {
    return (
        <div class="NavigationBar">
            <div className="NavLogo">
                <img src={Logo} alt="Logo" />
            </div>

            <div id="NavLink">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div> 
        </div>
    )
}

export default NavigationBar


