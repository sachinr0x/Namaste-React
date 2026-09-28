import React from "react"
import ReactDOM from "react-dom/client"

const dummyTitle = (
    <div className = "dummytitle">
        <h3>This is dummy title</h3>
    </div>
)

const TitleComponet = () =>(
    <h1 className = "title" tabIndex = "1">
        This is title
    </h1>
)
//component composition
const HeadingComponent = () =>(
    <div className = "container">
        <TitleComponet />
        <h2 className = "heading2">
            This is the heading
        </h2>
        {dummyTitle}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)
