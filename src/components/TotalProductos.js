import { useState, useEffect } from "react";

function TotalProductos(){
 const [total, setTotal] = useState ([]);

 useEffect(()=> {
    fetch('https://alls-ports.onrender.com/api/products')
        .then(response => response.json())
        .then(data => {
            setTotal(data.total)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div className="card text-bg-secondary mb-3">
    <div className="card-header">PRODUCTOS</div>
    <div className="card-body">
        <h5 className="card-title">Productos disponibles</h5>
        <p className="card-text">{total}</p>
    </div>
</div>
 )
}

export default TotalProductos;