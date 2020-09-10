import React from "react";
import Item from "./Item.js";

function ItemShow(props) {
  const item = props.items.find((item) => item.id == props.id);

  return (
    <div>
      {!!item ? (
        <Item
          name={item.name}
          id={item.id}
          price={item.price}
          image1={item.image1}
          image2={item.image2}
          isInCart={props.isInCart}
          addToCart={props.addToCart}
        />
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default ItemShow;
