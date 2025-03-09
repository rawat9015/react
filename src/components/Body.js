// import {restaurantList} from '../utiles/dataset';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

const Body = () => {

    let[restaurantList, setrestaurantList] = useState([
        {
            "id": 1,
            "name": "The Food Lounge",
            "rating": 4.5,
            "cuisine": ["Italian", "Continental"],
            "price": "$$",
            "average_price": 800,
            "delivery_time": "30-40 mins",
            "img": 'https://b.zmtcdn.com/data/dish_photos/16a/3e6c35b89a4aca0905a43aa3eacc916a.jpeg?output-format=webp'
          },
          {
            "id": 2,
            "name": "Spicy Treat",
            "rating": 3.2,
            "cuisine": ["Indian", "Mughlai"],
            "price": "$",
            "average_price": 500,
            "delivery_time": "25-35 mins",
            "img": 'https://b.zmtcdn.com/data/pictures/1/3131/d927fc82a5b6a9ce6be3b51469d1e23e_featured_v2.jpg'
          },
          {
            "id": 3,
            "name": "Sushi World",
            "rating": 4.7,
            "cuisine": ["Japanese", "Asian"],
            "price": "$$$",
            "average_price": 1200,
            "delivery_time": "40-50 mins",
            "img":'https://b.zmtcdn.com/data/dish_photos/76f/2384fefba70626298e672de16284276f.jpeg'
          },
    ]);

    return(
    <div  className='body'>
        <div className='search'>
            <button className='rate-btn' onClick={() => {
                
                let filterList = restaurantList.filter(
                    (res) => res.rating > 4
                );

                setrestaurantList(filterList);
                
            }}>
                
                Click for top rating</button>
        </div>
        <div className='res-container'>
            {restaurantList.map((restaurant) => (
                // console.log(restaurant)
            <RestaurantCard key={restaurant.id} resList = {restaurant}/>

           ))}

          </div>

    </div>
    )
}

export default Body;