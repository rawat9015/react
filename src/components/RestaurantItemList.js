import { MENU_ITEM_IMG } from '../utiles/contstants';
import veg from '../../veg.png';
import nonVeg from '../../non-veg.png';


const RestaurantItemList = (items) => {
        
    return  <div className="grid md:grid-cols-2 gap-6">
    {items.items.map((menuList) => (
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

}

export default RestaurantItemList;