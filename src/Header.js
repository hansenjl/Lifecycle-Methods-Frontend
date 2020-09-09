import React from 'react'

function Header(props){
    return(
        <div id="header">
            <h1>Shopping Central</h1>
            <p onClick={props.changePage} >View {props.page === "Items" ? "Cart" : "Items"}</p>
        </div>
    )
}

export default Header