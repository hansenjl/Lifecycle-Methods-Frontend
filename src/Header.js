import React from 'react'

function Header(props){
    return(
        <div id="header">
            <h1>Shopping</h1>
            <p onClick={props.toggleView}>View {props.currentPage === "Items" ? "Cart" : "Items"}</p>
        </div>
    )
}

export default Header