import { useState, useEffect } from "react";

function UltimoUsuario(){
 const [ultimoUsuario, setUltimoUsuario] = useState ([]);

 useEffect(()=> {
    fetch('https://ill-gold-gorilla-gown.cyclic.app/api/users/last')
        .then(response => response.json())
        .then(data => {
            setUltimoUsuario(data.data)
        })
        .catch(error => console.log(error));
 }, []);

 return(
    <div>
        <h2>Ultimo usuario creado</h2>
        <ul>
            <li> <img src={ultimoUsuario.imagen} alt=""/> </li>
            <li>ID: {ultimoUsuario.idUsuarios}</li>
            <li>Nombre: {ultimoUsuario.nombre}</li>
            <li>Correo electrónico: {ultimoUsuario.email}</li>
            <li>Número telefónico: {ultimoUsuario.telefono}</li>
            <li>Dirección: {ultimoUsuario.direccion}</li>
        </ul>
    </div>
 )
}

export default UltimoUsuario;