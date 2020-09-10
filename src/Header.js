import React from 'react'
import {
    Link
  } from "react-router-dom";

function Header(props){
    return(
        <div id="header">
            <h1>Shopping</h1>
            <Link to="/cart">
                <img src="https://cdn.onlinewebfonts.com/svg/img_290616.png" alt="cart"/>
            </Link>
            <Link to="/items">
                <p>View all Items</p>
            </Link>
            <Link to="/items/new">
                <p>Add a New Item</p>
            </Link>
        </div>
    )
}

export default Header