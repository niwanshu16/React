import react from 'react'
import reactDom from 'react-dom/client'

/*
    JSX is HTML Like syntax, it is not HTML.
    There are many differences, like class in HTML is className.

    Babel is responsible to transpiled/convert JSX to reactObject, the same object which 
    is return by createElement.
    Attributes to jsx tag is given in camelcase
*/
const parent = react.createElement("h1",{id:"heading"},"Niwanshu");

const reactCreateElement = <div id="heading"><h1>
    HELLO !!</h1></div>; // this is equivalent to create element

console.log(parent);
/*alert(age);
var age = prompt("What is your age");*/

const Component = ({text}) => (
    <h1>{text}</h1>
);

const Component1 = (text) => <h1>{text}</h1>

//Also known as component composition, component inside a component.
const MultipleComponent = () => (
    <div>
        {reactCreateElement}
        <Component text="Hello World"/>
        <Component text="From Jaipur"/>
        <Component text="Rajasthan, India"/>
        {Component1("Niwanshu")}
    </div>
);


    
/*const heading = 
    React.createElement("h1",{
        id:"heading",
        abc:"xyz"
    },
    "Hello World From React Practice!");*/

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<MultipleComponent />);

/// A function returning a JSX is called Component, or a function returning an object of createElement
// is called component.


const HeadingComponent = () => <h1 className="heading">Hello World Without return!! </h1>;
const HeadingComponent1 = () => {
    return <h1 className="heading"> Hello WOrld from return</h1>;
}

// Three ways to call component
root.render(<> 
    <HeadingComponent />
    {HeadingComponent1()}
    <HeadingComponent></HeadingComponent>
</>);