import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function ListadoUsuarios(){

    const [usuarios, setUsuarios] = useState ([]);

    useEffect(()=> {
        fetch('https://alls-ports.onrender.com/api/users')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data.data)
            })
            .catch(error => console.log(error));
     }, []);

    return(
        <div className="container text-center ">
            <Header/>
            <h1 className="m-5 pb-4">Todos los Usuarios</h1>

            <div className="row row-col-1 align-items-start me-2 ms-2">
                {usuarios.map((usuario, i)=>{
                    return(
                        <div key={i} className="card mb-3 h-auto col-12 col-sm-6 border-0">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={usuario.imagen} className="img-fluid rounded-start" alt="Imagen del producto"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{usuario.nombre}</h5>
                                    <p className="card-text">Email: {usuario.email}</p>
                                    <p className="card-text">Teléfono: {usuario.telefono}</p>
                                    <p className="card-text"><small className="text-muted">ID: {usuario.idUsuarios}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )       
                })}
            </div>

            <div className="m-4 p-4">
                <Link to="/"><button className="btn btn-outline-secondary">Volver</button></Link>
            </div>
        </div>
    )
}

export default ListadoUsuarios;