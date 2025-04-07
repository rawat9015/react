import { useEffect, useState } from "react";
import { MENU_API } from "../utiles/contstants";


const useRestaurantMenu = (resId) =>{

    const [resInfo , setresInfo] = useState([]);

    useEffect(() =>{

        fetchMenu();

    }, []);

    const fetchMenu = async () =>{

        let response = await fetch(MENU_API + resId);

        // let json = await response.json();

        console.log(response);

        debugger;
        
    }

    
    return resInfo;
}

export default useRestaurantMenu;