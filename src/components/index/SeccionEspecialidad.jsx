import { useContext, useEffect, useState } from "react";
import { UserContext } from "./authentication/UserSesion";

export function SeccionEspecialidad(props){
    
    let context = useContext(UserContext);
    const tokenSesion = context.token
    const [imagenUrl, setImagenUrl] = useState("");

    useEffect(()=>{
      
        fetch(props.imagen, {
            headers:{
                Authorization: `Bearer ${tokenSesion}` 
            }})
        .then(response => response.blob())
        .then(dataImage => {
            let imagen = URL.createObjectURL(dataImage);
            setImagenUrl(imagen)
        })    

    },[props.imagen, tokenSesion])
    
    return (
        <div className="col-lg-4 col-md-6 col-sd-12 my-1  justify-content-center  background-especialidad-encabezado">
        
            <div className="container">   
                <div className="row mt-3">
                    
                    <div className="col-12 justify-content-center">
                        <h3 className="pt-1 text-center titulo-especialidad">{props.plato}</h3>
                    </div>
                    
                     <div className="col-12 justify-content-around mb-1">
                        <a href={imagenUrl}><img src={imagenUrl} className="img-especialidad" alt="imagen plato"></img></a>
                    </div>
                    
                    <div className="col-12 justify-content-start  mb-2 ingredientes-especialidad">
                        {props.ingredientes}
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}