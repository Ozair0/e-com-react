import React from "react";
import "./prev.scss";
import ItemCollection from "../item-collection/item";

const PrevCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <ItemCollection key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default PrevCollection;
