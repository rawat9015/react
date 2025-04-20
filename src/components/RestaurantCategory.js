import RestaurantItemList from './RestaurantItemList';

const RestaurantCategory = ({data, showItems, setshowIndex}) => {


    const handleClcik = () =>{
        setshowIndex();
    }
    
    return <div>

        {/* Accordian Header  */}

        <div className="flex justify-between mb-4 shadow-xl p-3 rounded-md cursor-pointer" onClick={handleClcik}>

        <span className="text-xl font-semibold "> {data.title} ({data.itemCards.length})</span>

        <span>⬇️</span>

        </div>
        {/* Accordian Body  */}

        {showItems && <RestaurantItemList items={data.itemCards} />}

    </div>
}

export default RestaurantCategory ;