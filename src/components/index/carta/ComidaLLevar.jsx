import { useContext } from 'react';
import { RecetaEspecial } from "../../../datos/RecetaEspecial";
import { RecetasComida } from "../../../datos/RecetasComida";
import { RecetasEnsaladas } from "../../../datos/RecetasEnsaladas";
import { RecetasMontaditos } from "../../../datos/RecetasMontaditos";
import { UserContext } from '../authentication/UserSesion';
import { SeccionComidaLLevar } from "./SeccionComidaLLevar";
import { useTranslation } from 'react-i18next';

export function ComidaLLevar({setValue, value}){
    
    const context = useContext(UserContext);

    const t = context.translationRecetas;
    const tCarta = useTranslation('carta');
    
    return(
        <div className="container mt-3 "> 
            <div className="row">
                <div className="col-12">
                    <p className="header-Comida-llevar my-3"  onClick={()=>(setValue(!value))}>{tCarta.t('HeadComidaLLevar')}</p>
                </div>
                
                <SeccionComidaLLevar recetas={RecetasMontaditos(t)} titulos={tCarta.t('TitleMontaditos')}/>
                <SeccionComidaLLevar recetas={RecetasEnsaladas(t)} titulos={tCarta.t('TitleEnsaladas')}/>
                <SeccionComidaLLevar recetas={RecetasComida(t)} titulos={tCarta.t('TitlePlatos')}/>
                <SeccionComidaLLevar recetas={RecetaEspecial(t)} titulos={tCarta.t('TitleEspeciales')}/>
            
            </div>
        </div>
    );

}