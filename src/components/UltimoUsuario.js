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

   <div className="card mb-3 ">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={ultimoUsuario.imagen} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Último usuario creado</h5>
                    <p className="card-text">Nombre: {ultimoUsuario.nombre}</p>
                    <p className="card-text">Correo electrónico: {ultimoUsuario.email}</p>
                    <p className="card-text">Número telefónico: {ultimoUsuario.telefono}</p>
                    <p className="card-text">Dirección: {ultimoUsuario.direccion}</p>
                    <p className="card-text"><small className="text-muted">ID: {ultimoUsuario.idUsuarios}</small></p>
                </div>
            </div>
        </div>
    </div>

    
 )
}

export default UltimoUsuario;