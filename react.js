
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';


// EP-4 (Building Food App)

const Header = () => {
    return (
        <div>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);


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
