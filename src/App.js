import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ListadoProductos from "./components/ListadoProductos";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ListadoProductos" element={<ListadoProductos/>}/>
      </Routes>
    </div>
  );
}

export default App;
