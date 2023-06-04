import { RecetasMontaditos } from "./RecetasMontaditos"
import { RecetaEspecial } from "./RecetaEspecial"
import { RecetasComida } from "./RecetasComida"
import { RecetasEnsaladas } from "./RecetasEnsaladas"
import { RecetaBebidas } from "./RecetaBebidas"

export function CombinacionesGrupo(translation){
    
    //Formamos los menus diferentes 
    
    const recetasComidas = RecetasComida(translation);
    const recetasEnsaladas = RecetasEnsaladas(translation);
    const recetasMontaditos = RecetasMontaditos(translation);
    const recetasEspecial = RecetaEspecial(translation);
    const recetasBebidas = RecetaBebidas(translation);

    



    const menu1Ensaladas = [recetasEnsaladas[0], recetasEnsaladas[2],]
    const menu1Entrantes=[recetasMontaditos[0], recetasMontaditos[2],]
    const menu1Principales = [recetasComidas[0], recetasComidas[2]]
    const menu1Especialidad = [recetasEspecial[0], recetasEspecial[2],]
    
    const menu2Ensaladas = [recetasEnsaladas[1], recetasEnsaladas[3],]
    const menu2Entrantes=[recetasMontaditos[1], recetasMontaditos[3],]
    const menu2Principales = [recetasComidas[1], recetasComidas[3],]
    const menu2Especialidad = [recetasEspecial[3], recetasEspecial[4],]
    
    const menu3Ensaladas = [recetasEnsaladas[2], recetasEnsaladas[0],]
    const menu3Entrantes=[recetasMontaditos[2], recetasMontaditos[3],]
    const menu3Principales = [recetasComidas[0], recetasComidas[3],]
    const menu3Especialidad = [recetasEspecial[1], recetasEspecial[5],]
    
    const bebidas =[recetasBebidas[0], recetasBebidas[1],recetasBebidas[2],recetasBebidas[3]]
    
    const menus =[
        {

        },
        {
            ensaladas: menu1Ensaladas,
            entrantes: menu1Entrantes,
            principales: menu1Principales,
            especialidad: menu1Especialidad,
            bebida: bebidas
        },
        {
            ensaladas: menu2Ensaladas,
            entrantes: menu2Entrantes,
            principales: menu2Principales,
            especialidad: menu2Especialidad,
            bebida: bebidas
        },
        {
            ensaladas: menu3Ensaladas,
            entrantes: menu3Entrantes,
            principales: menu3Principales,
            especialidad: menu3Especialidad,
            bebida: bebidas
        },

    ]

    return menus;
}