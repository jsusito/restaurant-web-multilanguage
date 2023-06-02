import { RecetasMontaditos } from "./RecetasMontaditos"
import { RecetaEspecial } from "./RecetaEspecial"
import { RecetasComida } from "./RecetasComida"
import { RecetasEnsaladas } from "./RecetasEnsaladas"
import { RecetaBebidas } from "./RecetaBebidas"

export function CombinacionesGrupo(){
    
    //Formamos los menus diferentes 
    
    const menu1Ensaladas = [RecetasEnsaladas()[0], RecetasEnsaladas()[2],]
    const menu1Entrantes=[RecetasMontaditos()[0], RecetasMontaditos()[2],]
    const menu1Principales = [RecetasComida()[0], RecetasComida()[2],]
    const menu1Especialidad = [RecetaEspecial()[0], RecetaEspecial()[2],]
    
    const menu2Ensaladas = [RecetasEnsaladas()[1], RecetasEnsaladas()[3],]
    const menu2Entrantes=[RecetasMontaditos()[1], RecetasMontaditos()[3],]
    const menu2Principales = [RecetasComida()[1], RecetasComida()[3],]
    const menu2Especialidad = [RecetaEspecial()[3], RecetaEspecial()[4],]
    
    const menu3Ensaladas = [RecetasEnsaladas()[2], RecetasEnsaladas()[0],]
    const menu3Entrantes=[RecetasMontaditos()[2], RecetasMontaditos()[3],]
    const menu3Principales = [RecetasComida()[0], RecetasComida()[3],]
    const menu3Especialidad = [RecetaEspecial()[1], RecetaEspecial()[5],]
    
    const bebidas =[RecetaBebidas()[0], RecetaBebidas()[1],RecetaBebidas()[2],RecetaBebidas()[3]]
    
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