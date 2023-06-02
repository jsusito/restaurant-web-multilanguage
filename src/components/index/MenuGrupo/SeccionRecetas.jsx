export function SeccionRecetas(props){
    let i=0;
    return (
        props.recetas.map(receta =>(<p key={i++} className="lista-platos">{receta.description}</p>))
    );
}