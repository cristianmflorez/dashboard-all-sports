import { Link} from "react-router-dom";
import BuscarProducto from "./BuscarProducto";
import BuscarUsuario from "./BuscarUsuario";
import Header from "./Header";

function Busquedas(){

    return(
        <div className="container text-center ">
            <Header/>
            <div className="mx-4">
                <BuscarUsuario />
                <BuscarProducto/>
            </div>
            
            <div className="m-4 p-4">
                <Link to="/"><button className="btn btn-outline-secondary">Volver</button></Link>
            </div>
        </div>
    )
}

export default Busquedas;