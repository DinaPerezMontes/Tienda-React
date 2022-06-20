import React from "react";
import Item from "../item/Item.js";
import data from "../data.json";
import styles from "./listado.module.css";

export default function Listado({ hProduct }) {
  return (
    <div className={styles.container}>
      {data.map((item, i) => (
        <Item item={item} key={i} hProduct={hProduct} />
      ))}
    </div>
  );
}
