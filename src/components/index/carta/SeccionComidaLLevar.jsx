export function SeccionComidaLLevar({recetas,titulos}){
    var i=0;
    return (
        <div  className="col-md-3 mb-3 justify-content-center align-items-start">
            <p className="parraf-tittle text-start">{titulos}</p>
            { 
                recetas.map(receta =>{
                    return (
                        <div key={i++} className="container">
                            <div className="row ">
                                <div className="col-6 p-0">
                                    <p className="parraf-carta-llevar mb-3 text-start">{receta.description}</p>
                                </div>
                                <div className="col-2">
                                    <p className="parraf-carta-llevar mb-3 text-start">{receta.precio + "€"}</p>
                                </div>
                            </div>
                        </div>
                    )}
                )
            }      
        </div>
    );
}