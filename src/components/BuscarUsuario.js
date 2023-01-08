import { useState, useEffect, useRef } from "react";

function BuscarUsuario(){

    const idUser = useRef();
    const [usuario, setUsuario] = useState ([]);

    useEffect(()=> {
        
     }, [usuario]);

    const buscarUsuario =() => {
        fetch('https://ill-gold-gorilla-gown.cyclic.app/api/users/'+idUser.current.value)
            .then(response => response.json())
            .then(data => {
                setUsuario(data.data)
            })
            .catch(error => alert("El ID no se encuentra registrado"));
    }

    return(
        <div className="container text-center mb-4 rounded border border-secondary-subtle">
            <div className="m-5 row g-3">
                <h3 className="col-auto">Buscar usuario</h3>
                <div className="col-auto">
                    <input className="form-control" placeholder="ID" ref={idUser}/>
                </div>
                <div className="col-auto">
                    <button onClick={buscarUsuario}className="btn btn-secondary mb-3">Buscar</button>
                </div>
            </div>

            <div className="card mb-3 border-0 mb-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        {usuario.imagen && <img src={usuario.imagen} className="img-fluid rounded-start" alt="..."/>}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            {usuario.imagen && <p className="card-text">Nombre: {usuario.nombre}</p>}
                           {usuario.imagen &&  <p className="card-text">Correo electrónico: {usuario.email}</p>}
                           {usuario.imagen && <p className="card-text">Número telefónico: {usuario.telefono}</p>}
                           {usuario.imagen && <p className="card-text">Dirección: {usuario.direccion}</p>}
                           {usuario.imagen && <p className="card-text"><small className="text-muted">ID: {usuario.idUsuarios}</small></p>}
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default BuscarUsuario;