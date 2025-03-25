// import {restaurantList} from '../utiles/dataset';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';

const Body = () => {

    let[restaurantList, setrestaurantList] = useState([]);


    let[filterRestaurantList , setfilterRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.62026&lng=77.04507&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        setrestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        setfilterRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

 
    }
    
    const[seacrhText , setSeacrhText] = useState('');

    return(
    <div className='body'>


        <div className='search'>


            <input type='text' placeholder='Enter Search Value' className='seacrh-box' value={seacrhText} onChange={(e) =>{
                setSeacrhText(e.target.value);
            }}/>

            <button className='btn' onClick={() => {

                
                const filteredList = restaurantList.filter((res) => 
                    // (res)
                    res.info.name.toLocaleLowerCase().includes(seacrhText.toLocaleLowerCase())
                    
                );

                setfilterRestaurantList(filteredList);
                
            }}>Search</button>



            <button className='rate-btn' onClick={() => {
                
                let filterList = restaurantList.filter(

                    (res) => res.info.avgRating > 4
                    // (res) => console.log(res.info.avgRating)
                    
                );

                // console.log(filterList);
                
                setfilterRestaurantList(filterList);
                
            }}>
                
                Click for top rating</button>
        </div>
        
        <div className='res-container'>
            {filterRestaurantList.map((restaurant) => (
                // console.log(restaurant.info)
            <RestaurantCard key={restaurant.info.id} resList = {restaurant.info}/>

           ))}

          </div>

    </div>
    )
}

export default Body;