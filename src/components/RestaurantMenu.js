import { useEffect, useState } from "react";
import {MENU_ITEM_IMG} from "../utiles/contstants"
import veg from '../../veg.png';
import nonVeg from '../../non-veg.png';
import { useParams } from "react-router";
import useRestaurantMenu from "../utiles/useRestaurantMenu"

import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {

    const [isVegChecked , setisVegChecked] = useState(false);
    const [isNonVegChecked , setisNonVegChecked] = useState(false);

    const {resId} = useParams();    

    const { resInfo, filterResInfo, mainResInfo,setfilterResInfo , resInfoList} = useRestaurantMenu(resId);
    
    if( resInfo === null ) return <h1>Loading.....</h1>;

    const {areaName, avgRating, costForTwoMessage, cuisines, name, totalRatingsString, } = mainResInfo;

    const categories = resInfoList.filter((c) => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

    console.log(categories);
    
    return (

        <div className="bg-gray-50 p-4">
          <div className="max-w-4xl mx-auto">

    {/* Restaurant Card */}
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <div className="flex justify-between items-center mb-2">
        <span className="text-yellow-500 font-medium">⭐ {avgRating} ({totalRatingsString})</span>
        <span className="text-gray-600">{costForTwoMessage}</span>
      </div>
      <p className="text-gray-600 mb-1">{cuisines}</p>
      <p className="text-sm text-gray-500">📍 Outlet: {areaName}</p>

      {/* Toggle Buttons */}
      <div className="flex gap-4 mt-4">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={isVegChecked} value="veg" onChange={(e) => {
            const checked = e.target.checked;
            setisVegChecked(checked);
            setisNonVegChecked(false);
            if (checked) {
              const vegCheckFilter = resInfo.filter(
                (res) => res.card.info.itemAttribute.vegClassifier === 'VEG'
              );
              setfilterResInfo(vegCheckFilter);
            } else {
              setfilterResInfo(resInfo);
            }
          }} />
          <span className="text-green-700">Veg</span>
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={isNonVegChecked} value="nonveg" onChange={(e) => {
            const checked = e.target.checked;
            setisNonVegChecked(checked);
            setisVegChecked(false);
            if (checked) {
              const nonVegFilter = resInfo.filter(
                (res) => res.card.info.itemAttribute.vegClassifier === 'NONVEG'
              );
              setfilterResInfo(nonVegFilter);
            } else {
              setfilterResInfo(resInfo);
            }
          }} />
          <span className="text-red-700">Non-Veg</span>
        </label>
      </div>
    </div>

    {/* Menu Section */}
   
    {/* Categories */}

    {(filterResInfo === undefined)?  <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Uh-oh!</span> Uh-oh! Outlet is not accepting orders at the moment. They should be back soon
  </div>
</div> : 
    
    <div>
      
      <h3 className="text-xl font-semibold mb-4">Recommended ({filterResInfo.length})</h3>

      {categories.map((category) =>  (

        <RestaurantCategory data={category?.card?.card} />
    ))}
    
    <div className="grid md:grid-cols-2 gap-6">
      {filterResInfo.map((menuList) => (
        <div className="bg-white rounded-lg shadow p-4 flex justify-between" key={menuList.card.info.id}>
          <div className="flex-1 pr-4">
            <img src={menuList.card.info.itemAttribute.vegClassifier === 'VEG' ? veg : nonVeg} alt="type" className="w-5 h-5 mb-1" />
            
            <h4 className="font-semibold text-gray-800">{menuList.card.info.name}</h4>
            
            <span className="text-gray-600 text-sm block mb-1">₹{menuList.card.info.price === undefined ? menuList.card.info.defaultPrice / 100 : menuList.card.info.price / 100}</span>
            <span className="text-sm text-yellow-500">⭐ {menuList.card.info.ratings.aggregatedRating.rating} ({menuList.card.info.ratings.aggregatedRating.ratingCount})</span>
            <p className="text-sm text-gray-500 mt-1">{menuList.card.info.description}</p>
          
          </div>

          <div className="w-28">
            <img src={MENU_ITEM_IMG + menuList.card.info.imageId} className="w-full h-24 object-cover rounded" alt={menuList.card.info.name} />
            <button className="mt-2 w-full bg-green-500 text-white text-sm py-1 rounded hover:bg-green-600">+ Add</button>
          </div>
        </div>
      ))}
    </div>

    </div> 


    }
    
  
  </div>
</div>

    )
}

export default RestaurantMenu;

