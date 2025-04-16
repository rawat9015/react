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
        // <div className="main-menu bg-gray-300">
        //     <div className="main-menu-child">

        //     <div className="restaurant-card bg-white p-5 text-center">
        //         <h2>{name}</h2>
        //         <div className="details">
        //             <span className="rating">⭐{avgRating} ({totalRatingsString})</span>
        //             <span className="price">{costForTwoMessage}</span>
        //         </div>
        //         <p className="category"><a href="#">{cuisines}</a></p>
        //         <p className="location">📍 Outlet: {areaName}</p>
        //         {/* <p className="delivery-time">⏳ {sla.slaString}</p> */}

        //             <label className="switch">
        //             <input type="checkbox"  checked={isVegChecked} value='veg' onChange={(e) =>{

        //                 const checked = e.target.checked;

        //                 setisVegChecked(checked)
        //                 setisNonVegChecked(false);
                        
        //                 if(checked){

        //                     let vegCheckFilter = resInfo.filter(
        //                         (res) => res.card.info.itemAttribute.vegClassifier === 'VEG'
        //                     );
                            
        //                     setfilterResInfo(vegCheckFilter);
        //                 }

        //                 else{
        //                     setfilterResInfo(resInfo);
        //                 }

        //             }}/>
        //             <span className="slider round"></span>
        //             </label>

        //             <label className="switch">
        //             <input type="checkbox"  checked={isNonVegChecked} value="nonveg" onChange={(e) =>{
                        
        //                 const checked = e.target.checked;

        //                 setisNonVegChecked(checked);
        //                 setisVegChecked(false);

        //                 if(checked){

        //                     let vegCheckFilter = resInfo.filter(

        //                         (res) => res.card.info.itemAttribute.vegClassifier === 'NONVEG'
        
        //                     );
                            
        //                     setfilterResInfo(vegCheckFilter);
        //                 }

        //                 else{
        //                     setfilterResInfo(resInfo);
        //                 }

 
        //             }}/>
        //             <span className="slider round nonveg"></span>
        //             </label>

        //     </div>

        //     {/* <!-- Menu Section --> */}
        //     <h3 className="menu-title">Recommended (20)</h3>

        //     <div className="menu-container">

        //         {/* <!-- Menu Item 1 --> */}

        //         {filterResInfo.map((menuList) => {
        //             // console.log(menuList.card.info.price);

        //             return ( 
        //             <div className="menu-card" key={menuList.card.info.id}>
        //             <div className="menu-content">

        //                 <img src={menuList.card.info.itemAttribute.vegClassifier === 'VEG' ? veg : nonVeg} className='menu-veg-nonveg'/>

        //                 <h4>{menuList.card.info.name}</h4>

        //                 <span className="price">₹{menuList.card.info.price === undefined ? menuList.card.info.defaultPrice/100 : menuList.card.info.price/100}</span>

        //                 <span className="rating">⭐ {menuList.card.info.ratings.aggregatedRating.rating} ({menuList.card.info.ratings.aggregatedRating.ratingCount})</span>

        //                 <p className="description">{menuList.card.info.description}</p>
                        
        //             </div>

        //             <div className="menu-img">
        //                  <img src={MENU_ITEM_IMG + menuList.card.info.imageId} className='menu-item-img'/>

        //                 <button className="add-btn">+ Add</button>
        //             </div>
        //         </div>
        //         );
                    
        //         })}
            
        //     </div>

        //     </div>
        // </div>

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
    <h3 className="text-xl font-semibold mb-4">Recommended ({filterResInfo.length})</h3>

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
</div>

    )
}

export default RestaurantMenu;

