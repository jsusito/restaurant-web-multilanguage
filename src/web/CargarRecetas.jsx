import { useContext, useEffect, useState } from "react";
import { ErrorConnection } from "../components/index/mesages/ErrorConnection";
import { Especialidad } from "../components/index/Especialidad";
import { SeccionEspecialidad } from "../components/index/SeccionEspecialidad";
import { UserContext } from "../components/index/authentication/UserSesion";
import { Constants } from "../utils/Constants";


export function CargarRecetas(){
    
    const constants = new Constants();
    const [recetaResponse, setRecetaResponse] = useState([]);
    const [showFail, setShowFail] = useState(false)
    
    let context = useContext(UserContext);
    const token = context.token;

    useEffect(() =>{
        fetch(constants.API_RECETAS_ORIENTALES, {
        headers:{
            "authorization": "Bearer " + token
        },
        method: 'GET',
        })
        .then(response => response.json())
        .then(body => setRecetaResponse(body))
        .catch(error=>(setShowFail(true)))
        },[token])
    
    return(
        <> 
        
        { 
            recetaResponse && 
            <>
                <Especialidad title="recetas orientales">{recetaResponse.map(receta=>
                    (<SeccionEspecialidad 
                        key={receta.id}  
                        plato={receta.name} 
                        imagen={constants.API_IMAGE + receta.imagen}
                        ingredientes ={receta.ingredients}/>))}
                </Especialidad>
            </>        
        }

        { showFail && <ErrorConnection></ErrorConnection>}
        
        </>
    );
}