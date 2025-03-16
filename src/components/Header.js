import { useState, useEffect } from 'react';
import {COMPANY_LOGO} from "../utiles/contstants";

const Header = () => {

    const [sessionBtn , setSessionBtn] = useState("login");

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
                    <button className="btn" onClick={() =>{
                       (sessionBtn === 'login') ? setSessionBtn('logout') : setSessionBtn('login');
                    }}>{sessionBtn}</button>

                </ul>

            </div>

        </div>
    )
}

export default Header;