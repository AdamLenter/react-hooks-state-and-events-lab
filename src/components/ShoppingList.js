import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filteredSHoppingList, setFilteredShoppingList] = useState(items);

  function filterShoppingList(event) {
    let updatedList;
    if(event.target.value === "All") {
      updatedList = [...items];
    }
    else {
      updatedList = items.filter((item)=>item.category == event.target.value)
    }
  setFilteredShoppingList(updatedList);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {filterShoppingList}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredSHoppingList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
