import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement("div", {id : "parent"}, [
    React.createElement("div", {id : "child1"},[
        React.createElement("h1", {id : "c1heading1"}, "This is H1"),
        React.createElement("h2",{id : "c1heading2"}, "This is the h2 tag" )
    ]),
    React.createElement("div", {id : "child2"}, [
        React.createElement("h1", {id : "c2heading1"}, "This is H1 for child 2"),
        React.createElement("h2",{id : "c2heading2"}, "This is the h2 tag for child 2" )
    ] ),
])
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);