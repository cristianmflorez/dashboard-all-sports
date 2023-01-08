import Header from "./Header";
import Totales from "./Totales";
import UltimoProducto from "./UltimoProducto";
import UltimoUsuario from "./UltimoUsuario";
import Categorias from "./Categorias";

import { Link } from "react-router-dom";
import Ventas from "./Ventas";

function Home(){
    return(
        <div className="App ">
      <header className="container App-header ">
        <Header />
      </header>
      <main className="container text-center ">
        <Totales />
        <div>
          <div className="row row-col-1 align-items-start me-2 ms-2">
            <div className="col-12 col-sm-6"><UltimoUsuario /></div>
            <div className="col-12 col-sm-6"><UltimoProducto /></div>
          </div>
          <div><Categorias /></div>
          <div>
            <Ventas/>
          </div>
        </div>
        <div className="m-4 p-4">

            <Link to="/ListadoProductos"><button className="btn btn-outline-secondary m-2">Lista de productos</button></Link>
            <Link to="/ListadoUsuarios"><button className="btn btn-outline-secondary m-2">Lista de usuarios</button></Link>
            <Link to="/Busquedas"><button className="btn btn-outline-secondary m-2">Búsquedas</button></Link>
        
        </div>
      </main>
      <footer>

      </footer>
    </div>
    );
}

export default Home;