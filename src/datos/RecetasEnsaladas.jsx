import imagen5 from "./../images/carta/5.jpg"
import imagen6 from "./../images/carta/6.jpg"
import imagen7 from "./../images/carta/7.jpg"
import imagen8 from "./../images/carta/8.jpg"
import { TipoReceta } from "./TipoReceta"



    export function RecetasEnsaladas(){ 
        const tipo = new TipoReceta();
        return [
            {
                id:"11",
                description: "Granada, platano, kiwi con salsa de fresa",
                precio: "7",
                imagen: imagen5,
                tipo: [tipo.VEGETARIANO, tipo.SIN_GLUTEN, ]
            },
            {
                
                id:"12",
                description: "pulpo salvaje salteados con piña ",
                precio: "6",
                imagen: imagen6,
                tipo:[tipo.MARISCO, tipo.SIN_GLUTEN, ]
            },
            {
                id:"13",
                description: "tomates, lechuga , aceitunas ...",
                precio: "9",
                imagen: imagen7,
                tipo: [tipo.VEGETARIANO, tipo.SIN_GLUTEN, ]
            },
            {
                id:"14",
                description: "guacamole, mesclúm de brotes",
                precio: "12",
                imagen: imagen8,
                tipo:[tipo.VEGETARIANO]
            },
        ]
    }