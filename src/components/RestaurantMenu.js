import { useEffect, useState } from "react";


const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {

        fetchMenu();

    }, []);
    

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.62026&lng=77.04507&restaurantId=751410&catalog_qa=undefined&submitAction=ENTER');
        const json =  await data.json();

        setresInfo(json.data);

        console.log(resInfo);

        // console.log(resInfo.cards[2].card.card.info);

        // areaName avgRating costForTwoMessage cuisines name totalRatingsString sla.slaString

    };

    if( resInfo === null ) return <h1>Loading.....</h1>;


    const {areaName, avgRating, costForTwoMessage, cuisines, name, totalRatingsString, sla} = resInfo.cards[2].card.card.info;
    

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
                <div className="menu-card">
                    <div className="menu-content">
                        <h4>Veggie Supreme</h4>
                        <span className="price">₹379</span>
                        <span className="discount">🔥 60% OFF | USE SWIGGYIT</span>
                        <span className="rating">⭐ 4.6 (15)</span>
                        <p className="description">Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and 100% mozzarella cheese.</p>
                        <button className="add-btn">+ Add</button>
                    </div>
                </div>

                {/* <!-- Menu Item 2 --> */}
                <div className="menu-card">
                    <div className="menu-content">
                        <h4>Cheese Burst Pizza</h4>
                        <span className="price">₹299</span>
                        <span className="discount">🔥 50% OFF | USE CHEESY50</span>
                        <span className="rating">⭐ 4.8 (25)</span>
                        <p className="description">A delicious cheese burst pizza topped with extra mozzarella, fresh veggies, and a crispy crust.</p>
                        <button className="add-btn">+ Add</button>
                    </div>
                </div>

            </div>

            </div>
        </div>

    )
}

export default RestaurantMenu;

