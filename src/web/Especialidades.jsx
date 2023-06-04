import { useContext } from "react";
import { SeccionEspecialidad } from "../components/index/SeccionEspecialidad";
import { RecetaEspecial } from "../datos/RecetaEspecial";
import { UserContext } from "../components/index/authentication/UserSesion";
import { useTranslation } from "react-i18next";

export function Especialidades(){
   
    const t = useContext(UserContext).translationRecetas;
    const [tCarta] = useTranslation('carta');

       
    let recetas = RecetaEspecial(t);        
    return (
      <div className="container-fluid container-especialidades">  
        <div className="row">
            <div className="col-12-md d-flex justify-content-center main-row">
                <div className="container-fluid container-seccion">
                    <div className="row justify-content-center " >
                        
                        <div className="col-12 d-flex justify-content-center">
                            <h3 className="display-6 pt-3 "> {tCarta('nuestras-especialidades')} </h3>
                        </div>
                        
                        <div className="row justify-content-start" >
                           
                            {recetas.map(receta =>( 
                                    <SeccionEspecialidad key={receta.id}  plato={receta.description} imagen={receta.imagen}
                                    ingredientes ={receta.ingredientes}
                                />
                                )
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>   
    </div>
    );
}