import { SeccionEspecialidad } from "../components/index/SeccionEspecialidad";
import { RecetaEspecial } from "../datos/RecetaEspecial";

export function Especialidades(){
    let recetas = RecetaEspecial();        
    return (
      <div className="container-fluid container-especialidades">  
        <div className="row">
            <div className="col-12-md d-flex justify-content-center main-row">
                <div className="container-fluid container-seccion">
                    <div className="row justify-content-center " >
                        
                        <div className="col-12 d-flex justify-content-center">
                            <h3 className="display-6 pt-3 "> nuestras especialidades </h3>
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