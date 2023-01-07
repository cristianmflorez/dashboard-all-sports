import TotalUsuarios from "./TotalUsuarios";
import TotalProductos from "./TotalProductos";
import TotalCategorias from "./TotalCategorias";

function Totales(){
    return(
        <div className="container text-center">
            <div className="row align-items-start ms-1 me-1">
                <div className="col  p-1">
                    <TotalUsuarios />
                </div>
                <div className="col p-1">
                    <TotalProductos />
                </div>
                <div className="col  p-1">
                    <TotalCategorias />
                </div>
            </div>
        </div>
        
    );
}

export default Totales;