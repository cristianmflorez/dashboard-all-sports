import { useState, useEffect } from "react";

function UltimoProducto(){
 const [ultimoProducto, setUltimoProducto] = useState ([]);

 useEffect(()=> {
    fetch('https://ill-gold-gorilla-gown.cyclic.app/api/products/last')
        .then(response => response.json())
        .then(data => {
            setUltimoProducto(data.data)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div className="card mb-3 h-100 border-0">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={ultimoProducto.imagen} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Último producto agregado</h5>
                    <p className="card-text">Nombre: {ultimoProducto.nombre}</p>
                    <p className="card-text">Descripción: {ultimoProducto.descripcion}</p>
                    <p className="card-text"><small className="text-muted">ID: {ultimoProducto.idProductos}</small></p>
                </div>
            </div>
        </div>
    </div>

 )
}

export default UltimoProducto;