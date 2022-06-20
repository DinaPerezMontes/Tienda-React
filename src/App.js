import Cabecera from "./components/cabecera/Cabecera";
import Listado from "./components/listado/Listado";
import { useState } from "react";

function App() {
  const [productState, setProductState] = useState(0);

  const handlerProduct = (stock) => {
    setProductState(productState + stock);
  };

  return (
    <div className="App">
      <Cabecera pState={productState} />
      <Listado hProduct={handlerProduct} />
    </div>
  );
}

export default App;
