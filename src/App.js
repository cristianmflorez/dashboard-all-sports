import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ListadoProductos from "./components/ListadoProductos";
import ListadoUsuarios from "./components/ListadoUsuarios";
import Busquedas from "./components/Busquedas";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ListadoProductos" element={<ListadoProductos/>}/>
        <Route exact path="/ListadoUsuarios" element={<ListadoUsuarios/>}/>
        <Route exact path="/Busquedas" element={<Busquedas/>}/>
      </Routes>
    </div>
  );
}

export default App;
