import { useTranslation } from "react-i18next";
import { SeccionEncabezado } from "./SeccionEncabezado";
import { SeccionRecetas } from "./SeccionRecetas";

export function SeccionMenu(props){
    
    let currentClass = "align-items-start justify-content-center my-4 col-md-" + props.sizeColumn;
    const [t] = useTranslation('carta');

    return (
        <div className={currentClass}>
            
            <SeccionEncabezado titulo={props.titulo} seccion={t('entrantes')}/>
            <SeccionRecetas recetas={props.entrantes}></SeccionRecetas>

            <SeccionEncabezado seccion={t('principales')}/>
            <SeccionRecetas recetas={props.principales}></SeccionRecetas>   
            
            <SeccionEncabezado seccion={t('ensaladas')}/>
            <SeccionRecetas recetas={props.ensaladas}></SeccionRecetas>
            
            <SeccionEncabezado seccion={t('especiales')}/>
            <SeccionRecetas recetas={props.especiales}></SeccionRecetas>

            <SeccionEncabezado seccion={t('bebidas')}/>
            <SeccionRecetas recetas={props.bebidas}></SeccionRecetas>

        </div>
    );
}