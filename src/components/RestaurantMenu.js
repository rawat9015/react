import { useEffect, useState } from "react";
import {MENU_ITEM_IMG} from "../utiles/contstants"
import veg from '../../veg.png';
import nonVeg from '../../non-veg.png';
import { useParams } from "react-router";
import useRestaurantMenu from "../utiles/useRestaurantMenu"


const RestaurantMenu = () => {

    const [isVegChecked , setisVegChecked] = useState(false);
    const [isNonVegChecked , setisNonVegChecked] = useState(false);

    const {resId} = useParams();    

    const { resInfo, filterResInfo, mainResInfo,setfilterResInfo } = useRestaurantMenu(resId);
    
    if( resInfo === null ) return <h1>Loading.....</h1>;

    const {areaName, avgRating, costForTwoMessage, cuisines, name, totalRatingsString, } = mainResInfo;

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
                {/* <p className="delivery-time">⏳ {sla.slaString}</p> */}

                    <label className="switch">
                    <input type="checkbox"  checked={isVegChecked} value='veg' onChange={(e) =>{

                        const checked = e.target.checked;

                        setisVegChecked(checked)
                        setisNonVegChecked(false);
                        
                        if(checked){

                            let vegCheckFilter = resInfo.filter(
                                (res) => res.card.info.itemAttribute.vegClassifier === 'VEG'
                            );
                            
                            setfilterResInfo(vegCheckFilter);
                        }

                        else{
                            setfilterResInfo(resInfo);
                        }

                    }}/>
                    <span className="slider round"></span>
                    </label>

                    <label className="switch">
                    <input type="checkbox"  checked={isNonVegChecked} value="nonveg" onChange={(e) =>{
                        
                        const checked = e.target.checked;

                        setisNonVegChecked(checked);
                        setisVegChecked(false);

                        if(checked){

                            let vegCheckFilter = resInfo.filter(

                                (res) => res.card.info.itemAttribute.vegClassifier === 'NONVEG'
        
                            );
                            
                            setfilterResInfo(vegCheckFilter);
                        }

                        else{
                            setfilterResInfo(resInfo);
                        }

 
                    }}/>
                    <span className="slider round nonveg"></span>
                    </label>

            </div>

            {/* <!-- Menu Section --> */}
            <h3 className="menu-title">Recommended (20)</h3>

            <div className="menu-container">

                {/* <!-- Menu Item 1 --> */}

                {filterResInfo.map((menuList) => {
                    // console.log(menuList.card.info.price);

                    return ( 
                    <div className="menu-card" key={menuList.card.info.id}>
                    <div className="menu-content">

                        <img src={menuList.card.info.itemAttribute.vegClassifier === 'VEG' ? veg : nonVeg} className='menu-veg-nonveg'/>

                        <h4>{menuList.card.info.name}</h4>

                        <span className="price">₹{menuList.card.info.price === undefined ? menuList.card.info.defaultPrice/100 : menuList.card.info.price/100}</span>

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

