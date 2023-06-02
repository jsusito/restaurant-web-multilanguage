export function SeccionGrupoRecetas(props){
    return (
        <div className="col-lg-6 col-md-12 my-1  justify-content-center   background-especialidad-encabezado">
        
         <div className="container">   
                <div className="row mt-3">
                    <div className="col-12 justify-content-center">
                        <h6 className="pt-1 text-center titulo-especialidad">{props.plato}</h6>
                    </div>
                                    
                        <div className="col-12 justify-content-around mb-1">
                            <a href={props.imagen}><img src={props.imagen} className="img-especialidad" alt="imagen plato"></img></a>
                        </div>
                        <div className="col-12 justify-content-start  mb-2 ingredientes-especialidad">
                            {props.ingredientes}
                        </div>
                          
                </div>
          </div>
        </div>
    );
}