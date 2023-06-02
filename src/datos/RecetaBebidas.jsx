import vino from "./../images/carta/vino.jpg"
import refresco from "./../images/carta/refresco.jpg"
import zumos from "./../images/carta/zumos.jpg"
import cafe from "./../images/carta/cafe.jpg"

export function RecetaBebidas(){ 
        return [
            {
                id:"19",
                description: "refresco",
                precio: "2.50",
                imagen: refresco,
                tipo:[]

                 
            },
            {
                
                id:"20",
                description: "vino",
                precio: "3",
                imagen: vino,
                tipo:[]
            },
            {
                id:"21",
                description: "zumos",
                precio: "9",
                imagen: zumos,
                tipo:[]
            },
            {
                id:"22",
                description: "infusion o cafe",
                precio: "12",
                imagen: cafe,
                tipo:[]
            },
        ]
    }