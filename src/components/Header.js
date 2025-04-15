import { useState } from 'react';
import {COMPANY_LOGO} from "../utiles/contstants";
import { Link } from 'react-router';
import useOnlineStatus from '../utiles/useOnlineStatus';

const Header = () => {

    const [sessionBtn , setSessionBtn] = useState("login");

    const onlineStatus = useOnlineStatus();
    return (
        <div className='header bg-amber-200 flex justify-between items-center px-5'>
            <div className='logo-container'>
                <img className="w-[90px] logo" src={COMPANY_LOGO} />
            </div>
            <div className='nav-item'>
                <ul className='flex font-semibold'>
                    <li className='hover:bg-black hover:text-white p-3'> Status : {(onlineStatus === false) ? '🔴' : '🟢' } </li>
                    <li className='hover:bg-black hover:text-white p-3'><Link to="/" >Home </Link></li>
                 
                    <li className='hover:bg-black hover:text-white p-3'><Link to='/about'> About US </Link></li>
                    <li className='hover:bg-black hover:text-white p-3'><Link to='/contact'> Contact US </Link></li>
                    <li className='hover:bg-black hover:text-white p-3'><Link href='/cart'> Cart </Link></li>
                    <button className="bg-white px-5 rounded-sm hover:bg-black hover:text-white btn" onClick={() =>{
                       (sessionBtn === 'login') ? setSessionBtn('logout') : setSessionBtn('login');
                    }}>{sessionBtn}</button>

                </ul>

            </div>

        </div>
    )
}

export default Header;