import { useRouteError } from "react-router";

const Error = () => {

    const err = useRouteError();
    
    return(
        <div>
            <h1>Oops!</h1>
            <p>{err.status} : {err.statusText}</p>
            <p><i>{err.data}</i></p>
        </div>
    )
}

export default Error;