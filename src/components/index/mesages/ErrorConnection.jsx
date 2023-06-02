export function ErrorConnection(props){

    return(
        <div className="container">
            <div className="row">
                <div className="col-12 justify-content-center- align-items-center m-5">
                    <h1 className="text-center   text-danger ">No se pudo conectar</h1>
                    <p className="text-center">Fallo al conectarse al servidor</p>
                </div>
            </div>
        </div>
    );
}