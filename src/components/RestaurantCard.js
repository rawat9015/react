import {CARD_IMG} from "../utiles/contstants";


const RestaurantCard = (resList) => {
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resList.resList; 

    // console.log(resList.resList.info);
    

    return (
        <div className='res-card bg-gray-300 my-5 hover:bg-gray-400 w-[260px] h-[480px]'> 
          <img src={CARD_IMG + cloudinaryImageId} className='w-[260px] h-[260px] res-logo'/>
            <div className='px-5 py-2 res-row-1'>
            <h4 className='res-name font-bold'>{name}</h4><span> {avgRating} <i className="text-yellow-400 fa-solid fa-star star-icon"></i></span>
            </div>

            <div className='px-5 py-2 res-row-2'>
                <p className="truncate w-50">{cuisines.join(', ')}</p>   
                <p className="font-bold">{costForTwo}</p> 
            </div>

            <div className='px-5 py-2 res-row-3'> 
                <p>{sla?.deliveryTime} Mins</p>
            </div>
        </div>
    )
}

export default RestaurantCard;