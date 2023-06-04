import { useTranslation } from "react-i18next";
import { SelectForm } from "../formularios/SelectForm";

export function Encabezados({setOption}){
    const [t] = useTranslation('carta');       
    return(
        <>
          <div className="col-12 d-flex justify-content-center">
            <h3 className="display-6 pb-3 pt-5 text-center">{t('nuestras-especialidades')} </h3>
        </div>
        <div className="col-12 d-flex justify-content-center">
            <h3 className="py-1 pb-3 text-center titulo-especialidad">{t('disfrutando')}</h3>
        </div>
        <div className="container">    
            <div className="row justify-content-center mb-4">
                <div className="col-md-2">
                    <SelectForm 
                        tittle = {""}
                        options ={ ["menu 1", "menu 2","menu 3",t('todas'),]}
                        setValueState = {setOption} 
                        name = "eleccion-menu"
                     />
                </div>
            </div>
        </div>
        </>
    );
}