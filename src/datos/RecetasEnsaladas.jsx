import imagen5 from "./../images/carta/5.jpg"
import imagen6 from "./../images/carta/6.jpg"
import imagen7 from "./../images/carta/7.jpg"
import imagen8 from "./../images/carta/8.jpg"
import { TipoReceta } from "./TipoReceta"



    export function RecetasEnsaladas(translation){ 
        const tipo = new TipoReceta();
        return [
            {
                id:"11",
                description: translation('11.description11'),
                precio: "7",
                imagen: imagen5,
                tipo: [tipo.VEGETARIANO, tipo.SIN_GLUTEN, ]
            },
            {
                
                id:"12",
                description: translation('12.description12'),
                precio: "6",
                imagen: imagen6,
                tipo:[tipo.MARISCO, tipo.SIN_GLUTEN, ]
            },
            {
                id:"13",
                description: translation('13.description13'),
                precio: "9",
                imagen: imagen7,
                tipo: [tipo.VEGETARIANO, tipo.SIN_GLUTEN, ]
            },
            {
                id:"14",
                description: translation('14.description14'),
                precio: "12",
                imagen: imagen8,
                tipo:[tipo.VEGETARIANO]
            },
        ]
    }