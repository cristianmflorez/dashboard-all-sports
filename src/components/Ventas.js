import { useState, useEffect } from "react";

function Ventas(){
 const [ventas, setVentas] = useState ([]);

 useEffect(()=> {
    fetch('https://ill-gold-gorilla-gown.cyclic.app/api/purchases')
        .then(response => response.json())
        .then(data => {
            setVentas(data.data)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div className="card text-bg-secondary mt-4">
        <div className="card-header">Ventas</div>
        <div className="card-body">
            <h5 className="card-title">Dinero total: ${ventas.montoTotalVentas}</h5>
            <p className="card-text">Número de ventas realizadas: {ventas.cantidadTotalVentas}</p>
        </div>
    </div>
 )
}

export default Ventas;