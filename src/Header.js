import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="header">
      <Link to="/">
        <h1>Shopping</h1>
      </Link>

      <Link to="/cart">
        <p>View Cart</p>
      </Link>
      <Link to="/items">
        <p>View Items</p>
      </Link>
      <Link to="/items/new">
        <p>Create a New Item</p>
      </Link>
    </div>
  );
}

export default Header;
