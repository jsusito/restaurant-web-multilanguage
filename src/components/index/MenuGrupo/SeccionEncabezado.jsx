export function SeccionEncabezado(props){
    
    return(
        <>
            {props.titulo && <h4 className=" d-flex justify-content-start titulo-especialidad align-items-center">{props.titulo}</h4>}
            <p className="text-start menu-grupo mb-1 mt-3">{props.seccion}</p>
        </>
    );
}