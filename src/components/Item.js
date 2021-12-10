import React, { useState } from "react";

function Item({ name, category }) {
  const [cartClass, setCartCLass] = useState("")
  const [cartText, setCartText] = useState("Add to cart");

  function updateCart(event) {
    if(event.target.innerHTML === "Add to cart") {
      setCartCLass("in-cart");
      setCartText("Remove from cart");
      }
    else {
      setCartCLass("");
      setCartText("Add to cart");
    }
    }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {updateCart}>{cartText}</button>
    </li>
  );
}

export default Item;
