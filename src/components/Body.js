// import {restaurantList} from '../utiles/dataset';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';

import useOnlineStatus from '../utiles/useOnlineStatus';
import UserContext from '../utiles/UserContext';


const Body = () => {

    let[restaurantList, setrestaurantList] = useState([]);

    let[filterRestaurantList , setfilterRestaurantList] = useState([]);

    const {loggedInUser , setloggedInUser} = useContext(UserContext);
    
    useEffect(() => {
        fetchData();
        
    },[]);

    const fetchData = async () => {

        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.62026&lng=77.04507&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        setrestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        
        setfilterRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const[seacrhText , setSeacrhText] = useState('');

    const onlineStatus = useOnlineStatus();
  
    if(onlineStatus === false)  return <h1>Looks Like you are offline!! Please check your internet connection</h1>; 

    return(
    <div className='body'>

        <div className='search'>

            <input type='text' placeholder='Enter Search Value' className='w-100px border-1 p-2 m-5 seacrh-box' value={seacrhText} onChange={(e) =>{
                setSeacrhText(e.target.value);
            }}/>

            <button className='border-1 p-2 me-2 bg-gray-200 cursor-pointer btn' onClick={() => {

                
                const filteredList = restaurantList.filter((res) => 
                    // (res)
                    res.info.name.toLocaleLowerCase().includes(seacrhText.toLocaleLowerCase())
                    
                );

                setfilterRestaurantList(filteredList);
                
            }}>Search</button>



            <button className='border-1 p-2 me-2 bg-gray-200 cursor-pointer rate-btn' onClick={() => {
                
                let filterList = restaurantList.filter(

                    (res) => res.info.avgRating > 4
                    // (res) => console.log(res.info.avgRating)
                    
                );

                // console.log(filterList);
                
                setfilterRestaurantList(filterList);
                
            }}>
                
                Click for top rating</button>
        </div>

        <input type='text' placeholder='Enter User Name' className='w-100px border-1 p-2 m-5 seacrh-box' value={loggedInUser} onChange={(e) =>{
    setloggedInUser(e.target.value);
}} />


   
        
        
        <div className='mx-5 flex flex-wrap justify-between res-container'>
            {filterRestaurantList.map((restaurant) => (
                // console.log(restaurant.info)
            <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}> <RestaurantCard  resList = {restaurant.info}/>   </Link>  

            // <RestaurantCard key={restaurant.info.id} resList = {restaurant.info}/>
           ))}

          </div>

    </div>
    )
}

export default Body;