import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utiles/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-dom";


import React from "react";

test('Should load header component', () => {

    render(
    <BrowserRouter>
         <Provider store={appStore}>
            <Header/>
         </Provider>
    </BrowserRouter>

);

})