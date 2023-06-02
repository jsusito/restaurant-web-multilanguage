import { RecetasComida } from "../../../datos/RecetasComida";
import { RecetasEnsaladas } from "../../../datos/RecetasEnsaladas";
import { RecetasMontaditos } from "../../../datos/RecetasMontaditos";
import { SeccionComidaLLevar } from "./SeccionComidaLLevar";
import { RecetaEspecial} from "../../../datos/RecetaEspecial"

export function ComidaLLevar({setValue, value}){
    return(
        <div className="container mt-3 "> 
            <div className="row">
                <div className="col-12">
                    <p className="header-Comida-llevar my-3"  onClick={()=>(setValue(!value))}>Comida para llevar</p>
                </div>
                
                <SeccionComidaLLevar recetas={RecetasMontaditos()} titulos={"montaditos"}/>
                <SeccionComidaLLevar recetas={RecetasEnsaladas()} titulos={"Ensaladas"}/>
                <SeccionComidaLLevar recetas={RecetasComida()} titulos={"Comidas"}/>
                <SeccionComidaLLevar recetas={RecetaEspecial()} titulos={"Especiales"}/>
            
            </div>
        </div>
    );

}