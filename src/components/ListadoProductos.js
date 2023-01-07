import { Link } from "react-router-dom";

function ListadoProductos(){
    return(
        <div className="container text-center ">
            <div className="text-center bg-dark border border-5 rounded  p-3 m-3">
                <h1 className="text-white">Todos los productos</h1>
            </div>

            <div className="m-4 p-4">
                <Link to="/"><button className="btn btn-outline-secondary">Volver</button></Link>
            </div>
        </div>
    )
}

export default ListadoProductos;