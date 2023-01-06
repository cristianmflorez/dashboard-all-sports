import { useState, useEffect } from "react";

function TotalCategorias(){
 const [total, setTotal] = useState ([]);

 useEffect(()=> {
    fetch('https://ill-gold-gorilla-gown.cyclic.app/api/categories')
        .then(response => response.json())
        .then(data => {
            setTotal(data.data.length)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div>
        <h2>Número de Categorías</h2>
        <h3>{total}</h3>
    </div>
 )  
}

export default TotalCategorias;