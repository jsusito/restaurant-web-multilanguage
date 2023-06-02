import { SeccionMenu } from "./SeccionMenu";
import { SeccionGrupoRecetas } from "./SeccionGrupoRecetas";

export function Menu(props){
    
    var recetasMenu = [props.entrantes,props.principales, props.ensaladas, props.especiales, props.bebidas]
    return(
        <>
            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 justify-content-center">
                        <SeccionMenu 
                            titulo = {props.titulo}
                            entrantes={props.entrantes} 
                            principales={props.principales} 
                            ensaladas={props.ensaladas}
                            especiales={props.especiales}
                            bebidas={props.bebidas}
                            sizeColumn = "12"
                        />
                        </div>
                        <div className="col-md-8">
                            <div className="container">
                                <div className="row  ">
                                    
                                    {recetasMenu.map((secciones)=>
                                        (secciones.map((receta) => (
                                            <SeccionGrupoRecetas key={receta.id}  plato={receta.description} imagen={receta.imagen}
                                           />
                                        ))
                                        
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}