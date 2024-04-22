const parent = React.createElement("div",
    {id:"parent"}, [
        React.createElement("div",
        {id:"child"}, [   
            React.createElement("h1",{id:"heading"},"I'm a H1 Tag"),
            React.createElement("h2",{id:"heading"},"I'm a H2 Tag")
        ]),
        React.createElement("div",
        {id:"child2"},
        [   
            React.createElement("h1",{id:"heading"},"I'm a H1 Tag"),
            React.createElement("h2",{id:"heading"},"I'm a H2 Tag")
        ])
    ]
);
console.log(parent);
/*const heading = 
    React.createElement("h1",{
        id:"heading",
        abc:"xyz"
    },
    "Hello World From React Practice!");*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);