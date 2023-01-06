import { useState, useEffect } from "react";

function Categorias(){
 const [categorias, setCategorias] = useState ([]);

 useEffect(()=> {
    fetch('https://ill-gold-gorilla-gown.cyclic.app/api/categories')
        .then(response => response.json())
        .then(data => {
            setCategorias(data.data)
        })
        .catch(error => console.log(error));
        
 }, []);
 
 return(
    <div>
        <h2>Categorias</h2>
        <ul>
        {categorias.map((categoria,i)=>{
            return(
                <li key={i}>
                    <h4>{categoria.category}</h4>
                    <h4>Artículos en esta categoría: {categoria.countByCategory}</h4>
                </li>
            )
        })}
        </ul>
       
    </div>
 )
}

export default Categorias;