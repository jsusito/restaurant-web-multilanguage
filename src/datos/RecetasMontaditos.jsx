import imagen1 from "./../images/carta/1.jpg" 
import imagen2 from "./../images/carta/2.jpg"
import imagen3 from "./../images/carta/3.jpg"
import imagen4 from "./../images/carta/4.jpg"
import { TipoReceta } from "./TipoReceta"


export function RecetasMontaditos() { 
    
    const tipo = new TipoReceta();

    return [
    {
        id:"15",
        description: "salmón con sésamo, pimentada, arrope",
        precio: "5.02",
        imagen: imagen1,
        tipo: [tipo.PESCADO, tipo.SIN_GLUTEN, ]
    },
    {
        
        id:"16",
        description: "Nachos con aguacate, nata y huevo",
        precio: "9",
        imagen: imagen2,
        tipo: [tipo.VEGETARIANO, tipo.SIN_GLUTEN, ]
    },
    {
        id:"17",
        description: "Jamón con tomate",
        precio: "4",
        imagen: imagen3,
        tipo:[tipo.CARNE,]
    },
    {
        id:"18",
        description: "pato caramelizado a la naranja",
        precio: "7",
        imagen: imagen4,
        tipo: [tipo.CARNE, tipo.SIN_GLUTEN, ]
    },
]
}
