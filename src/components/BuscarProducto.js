import { useState, useEffect, useRef } from "react";

function BuscarProducto(){

    const idProducto = useRef();
    const [producto, setProducto] = useState ([]);

    useEffect(()=> {
        
     }, [producto]);

    const buscarProducto =() => {
        fetch('https://alls-ports.onrender.com/api/products/'+idProducto.current.value)
            .then(response => response.json())
            .then(data => {
                setProducto(data.data)
            })
            .catch(error => alert("El ID no se encuentra registrado"));
        
    }

    return(
        <div className="container text-center rounded border border-secondary-subtle">
            <div className="m-5 row g-3">
                <h3 className="col-auto">Buscar producto</h3>
                <div className="col-auto">
                    <input className="form-control" placeholder="ID" ref={idProducto}/>
                </div>
                <div className="col-auto">
                    <button onClick={buscarProducto}className="btn btn-secondary mb-3">Buscar</button>
                </div>
            </div>

            <div className="card mb-3 border-0 mb-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        {producto.imagen && <img src={producto.imagen} className="img-fluid rounded-start" alt="..."/>}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {producto.imagen && <p className="card-text">Nombre: {producto.nombre}</p>}
                            {producto.imagen && <p className="card-text">Descripción: {producto.descripcion}</p>}
                            {producto.imagen && <p className="card-text"><small className="text-muted">ID: {producto.idProductos}</small></p>}
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default BuscarProducto;