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
        <div className='res-card'> 
          <img src={CARD_IMG + cloudinaryImageId} className='res-logo'/>
            <div className='res-row-1'>
            <h4 className='res-name'>{name}</h4><span> {avgRating} <i className="fa-solid fa-star star-icon"></i></span>
            </div>

            <div className='res-row-2'>
                <p>{cuisines.join(', ')}</p>   
                <p>{costForTwo}</p> 
            </div>

            <div className='res-row-3'> 
                <p>{sla?.deliveryTime} Mins</p>
            </div>
        </div>
    )
}

export default RestaurantCard;