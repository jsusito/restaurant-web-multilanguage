function ParrafoAndHead(props, {alt = "imagen"}){
    return (
        <div key={props.id} className="col-12 d-flex justify-content-center align-items-center m-2">
            {props.imagen && <img src={props.imagen} alt={props.alt}></img>}
            {props.header && <h2>{props.header}</h2>}
            {props.parrafo && <p>{props.parrafo}</p>}
        </div>
    );
}

export default ParrafoAndHead;