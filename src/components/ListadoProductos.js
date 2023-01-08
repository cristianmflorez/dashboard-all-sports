import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListadoProductos(){

    const [productos, setProductos] = useState ([]);

    useEffect(()=> {
        fetch('https://ill-gold-gorilla-gown.cyclic.app/api/products')
            .then(response => response.json())
            .then(data => {
                setProductos(data.data)
            })
            .catch(error => console.log(error));
     }, []);

    return(
        <div className="container text-center ">
            <div className="text-center bg-dark border border-5 rounded  p-3 m-3">
                <h1 className="text-white">Todos los productos</h1>
            </div>

            <div className="row row-col-1 align-items-start me-2 ms-2">
                {productos.map((producto, i)=>{
                    return(
                        <div key={i} className="card mb-3 h-auto col-12 col-sm-6 border-0">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={producto.imagen} className="img-fluid rounded-start" alt="Imagen del producto"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">Precio: {producto.precio}</p>
                                    <p className="card-text">Descuento: {producto.descuento}% OFF</p>
                                    <p className="card-text">Descripción: {producto.descripcion}</p>
                                    <p className="card-text"><small className="text-muted">ID: {producto.idProductos}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )       
                })}
            </div>

            <div className="m-4 p-4">
                <Link to="/"><button className="btn btn-outline-secondary">Volver</button></Link>
            </div>
        </div>
    )
}

export default ListadoProductos;