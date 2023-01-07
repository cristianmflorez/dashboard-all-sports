import Header from "./Header";
import Totales from "./Totales";
import UltimoProducto from "./UltimoProducto";
import UltimoUsuario from "./UltimoUsuario";
import Categorias from "./Categorias";

import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="App ">
      <header className="container App-header ">
        <Header />
      </header>
      <main className="container text-center ">
        <Totales />
        <div>
          <div className="row align-items-start me-2 ms-2">
            <div className="col"><UltimoUsuario /></div>
            <div className="col"><UltimoProducto /></div>
          </div>
          <div><Categorias /></div>
        </div>
        <div className="m-4 p-4">
            <Link to="/ListadoProductos"><button className="btn btn-outline-secondary">Listado de productos</button></Link>
        </div>
      </main>
      <footer>

      </footer>
    </div>
    );
}

export default Home;