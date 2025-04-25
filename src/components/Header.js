import { useContext, useState } from 'react';
import {COMPANY_LOGO} from "../utiles/contstants";
import { Link } from 'react-router';
import useOnlineStatus from '../utiles/useOnlineStatus';
import UserContext from '../utiles/UserContext';
import { useSelector } from 'react-redux';


const Header = () => {

    const [sessionBtn , setSessionBtn] = useState("login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);


    // this is how we subscribe to the store
    const cartItem = useSelector((store) => store.cart.items);

    

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
                    <li className='hover:bg-black hover:text-white p-3 font-bold'><Link href='/cart'> Cart {cartItem.length} </Link></li>
                    <button className="bg-white px-5 rounded-sm hover:bg-black hover:text-white btn" onClick={() =>{
                       (sessionBtn === 'login') ? setSessionBtn('logout') : setSessionBtn('login');
                    }}>{sessionBtn}</button>

                <li className='hover:bg-black hover:text-white p-3'><Link href='/cart'> {data.loggedInUser} </Link></li>

                </ul>

            </div>

        </div>
    )
}

export default Header;