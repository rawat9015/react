const RestaurantCard = (resList) => {
    const {
        img,
        name,
        rating,
        cuisine,
        average_price,
        delivery_time
    } = resList.resList; 

    return (
        <div className='res-card'> 
          <img src={img} className='res-logo'/>
            <div className='res-row-1'>
            <h4 className='res-name'>{name}</h4><span> {rating} <i className="fa-solid fa-star star-icon"></i></span>
            </div>

            <div className='res-row-2'>
                <p>{cuisine.join(',')}</p>   
                <p>₹{average_price} for one</p> 
            </div>

            <div className='res-row-3'> 
                <p>{delivery_time}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;