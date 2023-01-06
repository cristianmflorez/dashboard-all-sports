import { useState, useEffect } from "react";

function TotalProductos(){
 const [total, setTotal] = useState ([]);

 useEffect(()=> {
    fetch('https://ill-gold-gorilla-gown.cyclic.app/api/products')
        .then(response => response.json())
        .then(data => {
            setTotal(data.total)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div>
        <h2>Número de Productos</h2>
        <h3>{total}</h3>
    </div>
 )
}

export default TotalProductos;