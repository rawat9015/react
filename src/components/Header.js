import { useState } from 'react';
import {COMPANY_LOGO} from "../utiles/contstants";
import { Link } from 'react-router';
import useOnlineStatus from '../utiles/useOnlineStatus';

const Header = () => {

    const [sessionBtn , setSessionBtn] = useState("login");

    const onlineStatus = useOnlineStatus();
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src={COMPANY_LOGO} />
            </div>
            <div className='nav-item'>
                <ul className='flex'>
                    <li className='p-3'> Status : {(onlineStatus === false) ? '🔴' : '🟢' } </li>
                    <li className='p-3'><Link to="/" >Home </Link></li>
                 
                    <li className='p-3'><Link to='/about'> About US </Link></li>
                    <li className='p-3'><Link to='/contact'> Contact US </Link></li>
                    <li className='p-3'><Link href='/cart'> Cart </Link></li>
                    <button className="btn" onClick={() =>{
                       (sessionBtn === 'login') ? setSessionBtn('logout') : setSessionBtn('login');
                    }}>{sessionBtn}</button>

                </ul>

            </div>

        </div>
    )
}

export default Header;