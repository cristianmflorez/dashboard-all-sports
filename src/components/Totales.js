import TotalUsuarios from "./TotalUsuarios";
import TotalProductos from "./TotalProductos";
import TotalCategorias from "./TotalCategorias";

function Totales(){
    return(
        <div>
            <div>
                <TotalUsuarios />
            </div>
            <div>
                <TotalProductos />
            </div>
            <div>
                <TotalCategorias />
            </div>
        </div>
        
    );
}

export default Totales;