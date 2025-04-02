import { useEffect, useState } from "react";
import {MENU_ITEM_IMG} from "../utiles/contstants"

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {

        fetchMenu();

    }, []);
    

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.62026&lng=77.04507&restaurantId=751410&catalog_qa=undefined&submitAction=ENTER');
        const json =  await data.json();

        setresInfo(json.data);


        // areaName avgRating costForTwoMessage cuisines name totalRatingsString sla.slaString

    };

    if( resInfo === null ) return <h1>Loading.....</h1>;


    const {areaName, avgRating, costForTwoMessage, cuisines, name, totalRatingsString, sla} = resInfo?.cards[2]?.card?.card?.info;

    const itemCards  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    

    console.log(itemCards);
    
    // console.log(resInfo.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards[0].card.info.name);
    
    

    return (
        <div className="main-menu">
            <div className="main-menu-child">

            <div className="restaurant-card">
                <h2>{name}</h2>
                <div className="details">
                    <span className="rating">⭐{avgRating} ({totalRatingsString})</span>
                    <span className="price">{costForTwoMessage}</span>
                </div>
                <p className="category"><a href="#">{cuisines}</a></p>
                <p className="location">📍 Outlet: {areaName}</p>
                <p className="delivery-time">⏳ {sla.slaString}</p>
            </div>

            {/* <!-- Menu Section --> */}
            <h3 className="menu-title">Recommended (20)</h3>

            <div className="menu-container">

                {/* <!-- Menu Item 1 --> */}
                {itemCards.map((menuList) => {
                    console.log(menuList.card.info);

                    return ( 
                    <div className="menu-card">
                    <div className="menu-content">
                        <h4>{menuList.card.info.name}</h4>
                        <span className="price">₹{menuList.card.info.price/100}</span>
                        <span className="rating">⭐ {menuList.card.info.ratings.aggregatedRating.rating} ({menuList.card.info.ratings.aggregatedRating.ratingCount})</span>
                        <p className="description">{menuList.card.info.description}</p>
                        
                    </div>

                    <div className="menu-img">
                         <img src={MENU_ITEM_IMG + menuList.card.info.imageId} className='menu-item-img'/>


                        <button className="add-btn">+ Add</button>
                    </div>
                </div>
                );
                    
                })}
            
            </div>

            </div>
        </div>

    )
}

export default RestaurantMenu;

