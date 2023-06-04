import imagen1 from "./../images/carta/1.jpg" 
import imagen2 from "./../images/carta/2.jpg"
import imagen3 from "./../images/carta/3.jpg"
import imagen4 from "./../images/carta/4.jpg"
import { TipoReceta } from "./TipoReceta"


export function RecetasMontaditos(t) { 
    
    const tipo = new TipoReceta();

    return [
    {
        id:"15",
        description: t('15.description15'),
        precio: "5.02",
        imagen: imagen1,
        tipo: [tipo.PESCADO, tipo.SIN_GLUTEN, ]
    },
    {
        
        id:"16",
        description: t('16.description16'),
        precio: "9",
        imagen: imagen2,
        tipo: [tipo.VEGETARIANO, tipo.SIN_GLUTEN, ]
    },
    {
        id:"17",
        description: t('17.description17'),
        precio: "4",
        imagen: imagen3,
        tipo:[tipo.CARNE,]
    },
    {
        id:"18",
        description: t('18.description18'),
        precio: "7",
        imagen: imagen4,
        tipo: [tipo.CARNE, tipo.SIN_GLUTEN, ]
    },
]
}
