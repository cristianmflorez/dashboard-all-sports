import { useState, useEffect } from "react";

function Categorias(){
 const [categorias, setCategorias] = useState ([]);

 useEffect(()=> {
    fetch('https://alls-ports.onrender.com/api/categories')
        .then(response => response.json())
        .then(data => {
            setCategorias(data.data)
        })
        .catch(error => console.log(error));
        
 }, []);

 return(
    <div>
        <h2 className="text-center bg-dark border border-5 rounded p-3 text-white w-100">Categorías</h2>
        <div className="container text-center">
            <div className="row align-items-center">
                {categorias.map((categoria,i)=>{
                    return(
                            <div key={i} className="m-1 rounded text-bg-secondary m-2 p-2 col">
                                <div className="card-title p-2 m-2 fw-bold">{categoria.category.toUpperCase()}</div>
                                <div className="card-body">
                                    <h5 className="card-header p-2 m-2 fw-normal fs-6">Cantidad de artículos</h5>
                                    <p className="card-text p-2 m-2">{categoria.countByCategory}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    </div>
 )
}

export default Categorias;