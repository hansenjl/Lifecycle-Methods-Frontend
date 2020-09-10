import React from "react";
import Item from "./Item";

export default function ItemShow(props) {
  const item = props.items.find((item) => item.id == props.id);

  function renderItem() {
    if (item) {
      return (
        <Item
          addToCart={props.addToCart}
          isInCart={props.isInCart(item.id)}
          name={item.name}
          price={item.price}
          id={item.id}
          image1={item.image1}
          image2={item.image2}
        />
      );
    } else {
      return <h1>Loading </h1>;
    }
  }

  return <div>{renderItem()}</div>;
}
