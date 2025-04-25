
import React, {lazy,Suspense, Component, useState } from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/UserClass';

import UserContext from './utiles/UserContext';

// import {createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter , RouterProvider, Outlet } from "react-router";

import UserClass from './components/UserClass';

import { Provider } from 'react-redux';
import appStore from './utiles/appStore';

// EP-4 (Building Food App)

const About = lazy(() => import('./components/About'));

const AppLayout = () => {

const [loggedInUser, setloggedInUser] = useState("Default User");


    return (
    <Provider store={appStore}>
       <UserContext.Provider value={{loggedInUser, setloggedInUser}}>

        <div className='app-layout'>
            <Header />
            <Outlet />
            
        </div>

        </UserContext.Provider> 
     </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement: <Error />,
        children: [
            { 
                path : "/",
                element : <Body />
        
            },
            { 
                path : "/about",
                element : <Suspense fallback={<h1>Wait a Litile</h1>}>   <About /> </Suspense>

            },
        
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/class",
                element: <UserClass name={'Neha Rawat'} location={'New Delhi'}  contact={'0987654321'} />,
        
            }
        ]
    },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


// Ep - 3
// const heading = React.createElement('h1',{},"Hello form React");

// const jsxheading = <h1 className='bg-red'>Hell from JSX</h1>;

// React Components 
// 1. Class Component
// 2. Funcational Component

// const HeadComponent = () => {

//     return <div>
//     <h1 className='bg-red'>Hello From React Funcational Component</h1>
//     </div>;
// } 

// const HeadComponent2 = () => <div>
//     <h1 className='bg-red'>Hello From React Funcational Component arrow function short cut</h1>
//     </div>;


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render([<HeadComponent2 />, <HeadComponent />]);


// Ep - 1
// const heading = React.createElement("h1" , {id:'head'}, "Hello World from React!");

// const parentdiv = React.createElement("div" , {id:'parentdiv'}, 
//     [React.createElement('div',{id:'childdiv'}, 
//         [React.createElement('p', {id:'para1'},'this is para 1')]
//     )]
// );


// const img = React.createElement("img", {src:'img1.jpeg', style:{width:'250px',height:'200px'}});

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render([img,heading,parentdiv]);
