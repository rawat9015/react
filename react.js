
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


// EP-4 (Building Food App)

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
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

const restaurantList = [
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
      "rating": 4.2,
      "cuisine": ["Indian", "Mughlai"],
      "price": "$",
      "average_price": 500,
      "delivery_time": "25-35 mins",
      "img": 'https://b.zmtcdn.com/data/pictures/1/3131/d927fc82a5b6a9ce6be3b51469d1e23e_featured_v2.jpg'
    },
    {
      "id": 3,
      "name": "Sushi World",
      "rating": 4.8,
      "cuisine": ["Japanese", "Asian"],
      "price": "$$$",
      "average_price": 1200,
      "delivery_time": "40-50 mins",
      "img":'https://b.zmtcdn.com/data/dish_photos/76f/2384fefba70626298e672de16284276f.jpeg'
    },
    {
      "id": 4,
      "name": "Burger Kingdom",
      "rating": 4.0,
      "cuisine": ["Fast Food", "American"],
      "price": "$",
      "average_price": 300,
      "delivery_time": "20-30 mins",
      "img":'https://b.zmtcdn.com/data/dish_photos/13c/3f7a166e59b67b2e008ab7dc0415813c.png'
    },
    {
      "id": 5,
      "name": "Tandoori Nights",
      "rating": 4.3,
      "cuisine": ["North Indian", "Tandoori"],
      "price": "$$",
      "average_price": 700,
      "delivery_time": "30-40 mins",
      "img": 'https://b.zmtcdn.com/data/dish_photos/e1d/af660c8ed86275f52a744b1509b2be1d.jpg?output-format=webp'
    },
    {
      "id": 6,
      "name": "Green Leaf",
      "rating": 4.6,
      "cuisine": ["Vegetarian", "Healthy"],
      "price": "$$",
      "average_price": 600,
      "delivery_time": "35-45 mins",
      "img":'https://b.zmtcdn.com/data/dish_photos/e15/f800a6561c61ab4b9d87734fd4278e15.png?output-format=webp'
    }
  ];  

const RestaurantCard = (resList) => {
    const data = resList.resList;
    console.log(data.cuisine);
    
    return (
        <div className='res-card'> 
          <img src={data.img} className='res-logo'/>
            <div className='res-row-1'>
            <h4 className='res-name'>{data.name}</h4><span> {data.rating} <i className="fa-solid fa-star star-icon"></i></span>
            </div>

            <div className='res-row-2'>
                <p>{data.cuisine.join(',')}</p>   
                <p>₹{data.average_price} for one</p> 
            </div>

            <div className='res-row-3'> 
                <p>{data.delivery_time}</p>
            </div>
        </div>
    )
}

const Body = () => {
    return(
    <div  className='body'>
        <div className='search'>
            <input type='text' placeholder='Enter Seacrh Value'/> 
            <button>Search</button>
        </div>
        <div className='res-container'>
            <RestaurantCard resList = {restaurantList[0]}/>
            <RestaurantCard resList = {restaurantList[1]}/>
            <RestaurantCard resList = {restaurantList[2]}/>
           
        </div>

        <div className='res-container'>
            <RestaurantCard resList = {restaurantList[3]}/>
            <RestaurantCard resList = {restaurantList[4]}/>
            <RestaurantCard resList = {restaurantList[5]}/>
           
        </div>

    </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);


// Ep - 3
// const heading = React.createElement('h1',{},"Hello form React");

// const jsxheading = <h1 className='bg-red'>Hell from JSX</h1>;

// React Components 
// 1. Class Component
// 2. Funcational Component

// const HeadComponent = () => {

//     return <div>
//     <h1 className='bg-red'>Hello From React Funcational Component</h1>
//     </div>;
// } 

// const HeadComponent2 = () => <div>
//     <h1 className='bg-red'>Hello From React Funcational Component arrow function short cut</h1>
//     </div>;


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render([<HeadComponent2 />, <HeadComponent />]);


// Ep - 1
// const heading = React.createElement("h1" , {id:'head'}, "Hello World from React!");

// const parentdiv = React.createElement("div" , {id:'parentdiv'}, 
//     [React.createElement('div',{id:'childdiv'}, 
//         [React.createElement('p', {id:'para1'},'this is para 1')]
//     )]
// );


// const img = React.createElement("img", {src:'img1.jpeg', style:{width:'250px',height:'200px'}});

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render([img,heading,parentdiv]);
