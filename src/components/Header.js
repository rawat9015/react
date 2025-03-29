import { useState } from 'react';
import {COMPANY_LOGO} from "../utiles/contstants";
import { Link } from 'react-router';

const Header = () => {

    const [sessionBtn , setSessionBtn] = useState("login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={COMPANY_LOGO} />
            </div>
            <div className='nav-item'>
                <ul>
                    <li><Link to="/" >Home </Link></li>
                 
                    <li><Link to='/about'> About US </Link></li>
                    <li><Link to='/contact'> Contact US </Link></li>
                    <li><Link href='/cart'> Cart </Link></li>
                    <button className="btn" onClick={() =>{
                       (sessionBtn === 'login') ? setSessionBtn('logout') : setSessionBtn('login');
                    }}>{sessionBtn}</button>

                </ul>

            </div>

        </div>
    )
}

export default Header;