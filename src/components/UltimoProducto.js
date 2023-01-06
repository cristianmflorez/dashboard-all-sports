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
    <div>
        <h2>Ultimo producto agregado</h2>
        <ul>
            <li> <img src={ultimoProducto.imagen} alt=""/> </li>
            <li>ID: {ultimoProducto.idProductos}</li>
            <li>Nombre: {ultimoProducto.nombre}</li>
            <li>Descripción: {ultimoProducto.descripcion}</li>
        </ul>
    </div>
 )
}

export default UltimoProducto;