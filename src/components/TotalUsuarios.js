import { useState, useEffect } from "react";

function TotalUsuarios(){
 const [total, setTotal] = useState ([]);

 useEffect(()=> {
    fetch('https://ill-gold-gorilla-gown.cyclic.app/api/users')
        .then(response => response.json())
        .then(data => {
            setTotal(data.total)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div>
        <h2>Número de usuarios</h2>
        <h3>{total}</h3>
    </div>
 )
}

export default TotalUsuarios;