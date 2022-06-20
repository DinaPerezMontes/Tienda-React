import { useState } from "react";
import styles from "./item.module.css";

export default function Item({ item, hProduct }) {
  const [stockState, setStockState] = useState(item.stock);

  function handlerStock() {
    hProduct(1);
    setStockState(stockState - 1);
  }

  return (
    <div className={styles.producto}>
      <h3>{item.producto.nombre}</h3>
      <p>{item.producto.descripcion}</p>
      <h5>
        En Stock: <span>{stockState > 0 ? stockState : "agotado"}</span>
      </h5>
      {}
      <button
        onClick={() => handlerStock()}
        disabled={stockState > 0 ? false : true}
      >
        {" "}
        {item.stock > 0 ? "Comprar" : "Sin Stock"}
      </button>
    </div>
  );
}
