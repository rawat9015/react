import ItemCards from "./itemCards";

const RestaurantCategory = ({data}) => {
    
    return <div>

        {/* Accordian Header  */}

        <div className="flex justify-between mb-4 shadow-xl p-3 rounded-md cursor-pointer">

        <span className="text-xl font-semibold "> {data.title} ({data.itemCards.length})</span>

        <span>⬇️</span>

        </div>
        {/* Accordian Body  */}

        <ItemCards items={data} />


    </div>
}

export default RestaurantCategory ;