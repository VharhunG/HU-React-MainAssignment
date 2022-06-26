import './NavBar.css'
import shoppinCart from "../../../logo/shopping-cart.svg"
import profileIcon from "../../../logo/profile-icon.svg"
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
    return (
        <div className="nav-bar">
                <div style={{flex:"2"}}>
                    <Link to='/'>
                        <div className="main-logo" ></div>
                    </Link>
                </div>
                <div style={{"display":"flex", "flex":"1","justifyContent": "space-around", "alignItems":"center"}}>
                    <Link to='/'>
                        <button className='courses-btn'>COURSES</button>
                    </Link>
                    <Link to='/wishlist'>
                        <button className='wish-list-btn'>MY WISHLIST</button>
                    </Link>
                    <Link to='/checkout'>
                        <img src={shoppinCart} alt="shopppingcartlogo" />
                    </Link>
                    <Link to='/profile'>
                        <img src={profileIcon} alt="profilelogo" />
                    </Link>
                </div>
        </div>
    )
}

export default NavBar