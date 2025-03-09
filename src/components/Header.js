import {COMPANY_LOGO} from "../utiles/contstants";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={COMPANY_LOGO} />
            </div>
            <div className='nav-item'>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;