
export function FilterRecipe(recetas, filtro){

    const NO_SELECTION = "0";
    let filterRecipe = recetas;
    
    if(filtro === NO_SELECTION)
        return filterRecipe;
    else
        return filterRecipe.filter(receta => receta.tipo.includes(filtro))
}