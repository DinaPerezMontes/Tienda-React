import React from "react";
import style from "./cabecera.module.css";

export default function Cabecera({ pState }) {
  return (
    <header class={style.header}>
      <h1>Carrito de Compras</h1>
      <p>
        Cantidad de Productos <span>{pState}</span>
      </p>
    </header>
  );
}
