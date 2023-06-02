import especialidad1 from "./../images/carta/especialidad1.jpg"
import especialidad2 from "./../images/carta/especialidad2.jpg"
import especialidad3 from "./../images/carta/especialidad3.jpg"
import especialidad4 from "./../images/carta/especialidad4.jpg"
import especialidad5 from "./../images/carta/especialidad5.jpg"
import especialidad6 from "./../images/carta/especialidad6.jpg"
import { TipoReceta } from "./TipoReceta"
export function RecetaEspecial(){
    
    const tipo = new TipoReceta();
    return [
        {
            id: 1,
            description: "tortitas con carne",
            imagen: especialidad1,
            ingredientes:"Deliciosas torititas con carne, arroz y fríjoles",
            precio:17.99,
            text:"Delicia de  tortitas con carne",
            tipo: [tipo.CARNE]
        },
        {
            id: 2,
            description: "Arepa especial vegetales",
            imagen: especialidad2,
            ingredientes:"Aguacate, tomate, cebola, salsa especial",
            precio:17.99,
            text:"Prueba nuestras arepas, una explosión de sabores",
            tipo: [tipo.SIN_GLUTEN, tipo.VEGETARIANO]

        },
        {
            id: 3,
            description: "postre tropical",
            imagen: especialidad3,
            ingredientes:"Fresas, hierva buena, arroz inflado y moras frescas",
            precio:17.99,
            text: "un maravilloso postre para disfrutar",
            tipo: [tipo.SIN_GLUTEN, tipo.VEGETARIANO]
        },
        {
            id: 4,
            description: "Bacon relleno",
            imagen: especialidad4,
            ingredientes:"hojaldre, bacon, dátiles y salsa barbacoa",
            precio:17.99,
            text: "una experiencia inolvidable",
            tipo:[tipo.CARNE]
        },
        {
            id: 5,
            description: "bocadillo marinero",
            imagen: especialidad5,
            ingredientes:"pan , tomate, rúcula, soja, piña",
            precio:17.99,
            text: "pruebalo, desearás volver ",
            tipo: [tipo.PESCADO]
        },
        {
            id: 6,
            description: "carne en salsa viera",
            imagen: especialidad6,
            ingredientes:"Carne con salsa, ajo, tomate, trufa, y cirulela",
            precio:17.99,
            text: "de nuestros mejores platos disponibles",
            tipo: [tipo.CARNE]

        },    
    ]
}





      
