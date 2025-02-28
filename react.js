
const heading = React.createElement("h1" , {id:'head'}, "Hello World from React!");

const parentdiv = React.createElement("div" , {id:'parentdiv'}, 
    [React.createElement('div',{id:'childdiv'}, 
        [React.createElement('p', {id:'para1'},'this is para 1')]
    )]
);


const img = React.createElement("img", {src:'img1.jpeg', style:{width:'250px',height:'200px'}});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([img,heading,parentdiv]);
