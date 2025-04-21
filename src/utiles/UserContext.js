import { createContext } from "react";

const UserContext = createContext({

    loggedInUser: "Default User",
    setloggedInUser : () => {},

});

export default UserContext;