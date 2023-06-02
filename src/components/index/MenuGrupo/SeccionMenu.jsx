import { SeccionEncabezado } from "./SeccionEncabezado";
import { SeccionRecetas } from "./SeccionRecetas";

export function SeccionMenu(props){
    
    let currentClass = "align-items-start justify-content-center my-4 col-md-" + props.sizeColumn;
    
    return (
        <div className={currentClass}>
            
            <SeccionEncabezado titulo={props.titulo} seccion={"Entradas para compartir"}/>
            <SeccionRecetas recetas={props.entrantes}></SeccionRecetas>

            <SeccionEncabezado seccion={"Platos Principales a elegir"}/>
            <SeccionRecetas recetas={props.principales}></SeccionRecetas>   
            
            <SeccionEncabezado seccion={"Ensaladas a elegir"}/>
            <SeccionRecetas recetas={props.ensaladas}></SeccionRecetas>
            
            <SeccionEncabezado seccion={"Especiales a elegir"}/>
            <SeccionRecetas recetas={props.especiales}></SeccionRecetas>

            <SeccionEncabezado seccion={"Bebidas a elegir"}/>
            <SeccionRecetas recetas={props.bebidas}></SeccionRecetas>

        </div>
    );
}