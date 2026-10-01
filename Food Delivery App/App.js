import React from 'react'
import ReactDOM from 'react-dom/client'

/*
Header
    Logo
    Nav_icons(Home, Cart)
Body
    Search-bar
    Carousel
    Restaurants
        Restaurant-cards
            image
            other info
Footer
    Copyright-disclaimer
    About_us
    Contact_U
    License
*/

const NavIcons = () =>{
   return (<div className = "nav-icons">
    <ul className = "nav-list">
        <li>Home</li>
        <li><img src="./Resources/incons_and_logos/cart-icon.png" alt="Cart" /></li>
    </ul>
    </div>)
}

const Logo = () => {
    return (<div className = "logo">
       <img src="./Resources/incons_and_logos/logo.png" alt="Logo" /> 
    </div>)
}

const Header = () => {
    return (<div className = "header">
        <Logo/>
        <NavIcons/>
    </div>)
}

const SearchBar = () => {
    return (<div className = "search-bar">
        <input type="text" placeholder= "Search for restaurants or cuisines"/>
        <img src="./Resources/incons_and_logos/search-icon.png" alt="Search" />
        </div>
    )
}

const RestaurantCard = () =>{
    return (<div className = "restaurant-card">
        <img src="./Resources/restaurants/restaurant1.jpg" alt="Restaurant" />
        <h3>Restaurant Name</h3>
        <p>Cuisine Type</p>
        <p>Rating: 4.5</p>
    </div>)
}

const Restaurants = () => {
    return (<div className = "restaurants-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>)
}


const Body = () =>{
  return (<div className= "body-container">
    <SearchBar/>
    <Restaurants/>    
  </div>)
}

const Footer = () =>{
    return(
        <div className = "footer-container">

        </div>
    )
}

const App = () =>(
    <div className="parent-container">
        <Header />
        <Body/>
        <Footer/>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)