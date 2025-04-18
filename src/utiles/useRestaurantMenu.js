import { useEffect, useState } from "react";
import { MENU_API } from "../utiles/contstants";


const useRestaurantMenu = (resId) =>{

    const [resInfo , setresInfo] = useState(null);
    const [filterResInfo, setfilterResInfo] = useState([]);
    const [mainResInfo, setmainResInfo] = useState([]);
    const [resInfoList, setresInfoList] = useState([]);

    useEffect(() =>{

        fetchMenu();

    }, []);

    const fetchMenu = async () => {

            let response = await fetch(MENU_API + resId);
            let json = await response.json();

            setresInfo(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);
            
            setfilterResInfo(json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards);
            
            setmainResInfo(json.data.cards[2]?.card?.card?.info);

            setresInfoList(json.data);
    };
    

    // return resInfo;

    return {
        resInfo,
        filterResInfo,
        mainResInfo,
        resInfoList,
        setfilterResInfo,
        setmainResInfo
      };
}

export default useRestaurantMenu;