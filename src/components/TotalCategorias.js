import { useState, useEffect } from "react";

function TotalCategorias(){
 const [total, setTotal] = useState ([]);

 useEffect(()=> {
    fetch('https://alls-ports.onrender.com/api/categories')
        .then(response => response.json())
        .then(data => {
            setTotal(data.data.length)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div className="card text-bg-secondary mb-3 ">
        <div className="card-header">CATEGORÍAS</div>
        <div className="card-body">
            <h5 className="card-title">Número de categorías</h5>
            <p className="card-text">{total}</p>
        </div>
    </div>
 )  
}

export default TotalCategorias;